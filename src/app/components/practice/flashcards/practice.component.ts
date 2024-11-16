import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vocable } from 'src/app/models/vocable.model';
import { PracticeService } from 'src/app/services/practice.service';
import { DecimalPipe, Location } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';
import { addIcons } from 'ionicons';
import {
  syncOutline,
  thumbsDownOutline,
  thumbsUpOutline,
  arrowBackOutline,
  reload,
  volumeMediumOutline,
} from 'ionicons/icons';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { LongPressDirective } from 'src/app/directives/long-press.directive';
import {
  IonHeader,
  IonCard,
  IonCardContent,
  IonGrid,
  IonLabel,
  IonCol,
  IonRow,
  IonBackButton,
  IonButtons,
  IonContent,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';

enum PracticeMode {
  RANDOM = 'random',
  FOREIGN_TO_NATIVE = 'foreign-to-native',
  NATIVE_TO_FOREIGN = 'native-to-foreign',
}

@Component({
  selector: 'vt-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonRow,
    IonCol,
    IonLabel,
    IonGrid,
    IonCardContent,
    IonCard,
    IonHeader,
    LongPressDirective,
    DecimalPipe,
    RouterLink,
  ],
})
export class PracticeComponent implements ViewWillEnter, ViewWillLeave {
  flashcardFrontText: string = '';

  flashcardBackText: string = '';

  rotated: boolean = false;

  finished: boolean = false;

  results: (boolean | undefined)[] = [];

  correctPercentage: number = 0;

  autoSpeak = false;

  private vocables: Vocable[] = [];

  private currentVocable?: Vocable;

  private index: number = -1;

  private mode: PracticeMode;

  private readonly foreignLanguage = 'en-UK';
  private readonly nativeLanguage = 'de-DE';

  private flashcardFrontLanguage = this.nativeLanguage;
  private flashcardBackLanguage = this.foreignLanguage;

  private knownAbbreviations = [
    { abbreviation: 'sth.', word: 'something' },
    { abbreviation: 'etw.', word: 'etwas' },
    { abbreviation: 'sb.', word: 'somebody' },
    { abbreviation: 'jdn.', word: 'jemanden' },
  ];

  constructor(
    private route: ActivatedRoute,
    private practiceService: PracticeService,
    private location: Location,
    private themeService: ThemeService,
  ) {
    addIcons({
      syncOutline,
      thumbsDownOutline,
      thumbsUpOutline,
      arrowBackOutline,
      reload,
      volumeMediumOutline,
    });

    this.route.params.pipe(takeUntilDestroyed()).subscribe(async (params) => {
      this.mode = params.mode;
      await this.loadVocabularyToPractice();
    });
  }

  ionViewWillEnter(): void {
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }

  ionViewWillLeave() {
    speechSynthesis.cancel();
  }

  rotateCard() {
    this.rotated = true;

    if (this.autoSpeak && this.flashcardBackLanguage == this.foreignLanguage) {
      this.speak();
    }
  }

  speak() {
    let text = this.rotated ? this.flashcardBackText : this.flashcardFrontText;
    this.knownAbbreviations.forEach((entry) => (text = text.replaceAll(entry.abbreviation, entry.word)));
    const language = this.rotated ? this.flashcardBackLanguage : this.flashcardFrontLanguage;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  toggleAutoSpeak() {
    this.autoSpeak = !this.autoSpeak;
  }

  async markAsCorrect() {
    await this.practiceService.reportCorrect(this.currentVocable!);
    this.results[this.index] = true;
    this.showNext();
  }

  async markAsWrong() {
    await this.practiceService.reportWrong(this.currentVocable!);
    this.results[this.index] = false;
    this.showNext();
  }

  async continuePractice() {
    await this.loadVocabularyToPractice();
  }

  private async loadVocabularyToPractice() {
    this.vocables = await this.practiceService.getVocabularyToPractice();
    if (this.vocables.length != 0) {
      this.index = -1;
      this.results = new Array(this.vocables.length);
      this.finished = false;
      this.showNext();
    } else {
      this.finished = true;
    }
  }

  private showNext() {
    if (this.index == this.vocables.length - 1) {
      this.finished = true;
      this.correctPercentage = (this.results.filter((result) => result === true).length / this.results.length) * 100;
    } else {
      this.index++;
      this.currentVocable = this.vocables[this.index];
      this.updateFlashcard();
      this.rotated = false;
      if (this.autoSpeak && this.flashcardFrontLanguage == this.foreignLanguage) {
        this.speak();
      }
    }
  }

  private updateFlashcard() {
    let mode = this.mode;
    if (mode == PracticeMode.RANDOM) {
      mode = Math.random() >= 0.5 ? PracticeMode.FOREIGN_TO_NATIVE : PracticeMode.NATIVE_TO_FOREIGN;
    }
    switch (mode) {
      case PracticeMode.FOREIGN_TO_NATIVE:
        this.flashcardFrontText = this.currentVocable.foreignMeaning;
        this.flashcardBackText = this.currentVocable.nativeMeanings.join(', ');
        this.flashcardFrontLanguage = this.foreignLanguage;
        this.flashcardBackLanguage = this.nativeLanguage;
        break;
      case PracticeMode.NATIVE_TO_FOREIGN:
        this.flashcardFrontText = this.currentVocable.nativeMeanings.join(', ');
        this.flashcardBackText = this.currentVocable.foreignMeaning;
        this.flashcardFrontLanguage = this.nativeLanguage;
        this.flashcardBackLanguage = this.foreignLanguage;
        break;
    }
  }
}
