import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vocable } from 'src/app/models/vocable.model';
import { PracticeService } from 'src/app/services/practice.service';
import { Location } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';
import { addIcons } from "ionicons";
import { syncOutline, thumbsDownOutline, thumbsUpOutline, arrowBackOutline, reload, volumeMediumOutline } from "ionicons/icons";
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';

enum PracticeMode {
  RANDOM = 'random',
  FOREIGN_TO_NATIVE = 'foreign-to-native',
  NATIVE_TO_FOREIGN = 'native-to-foreign'
}

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit, ViewWillEnter, ViewWillLeave {

  flashcardFrontText: string = "";

  flashcardBackText: string = "";

  rotated: boolean = false;

  finished: boolean = false;

  results: (boolean | undefined)[] = [];

  correctPercentage: number = 0;

  private vocables: Vocable[] = [];

  private currentVocable?: Vocable;

  private index: number = -1;

  private mode: PracticeMode;

  private flashcardFrontLanguage = "de-DE";
  private flashcardBackLanguage = "en-UK"

  private knownAbbreviations = [
    { abbreviation: 'sth.', word: 'something', },
    { abbreviation: 'etw.', word: 'etwas', },
    { abbreviation: 'sb.', word: 'somebody', },
    { abbreviation: 'jdn.', word: 'jemanden' }
  ]

  constructor(private route: ActivatedRoute, private practiceService: PracticeService, private location: Location, private themeService: ThemeService) {
    addIcons({ syncOutline, thumbsDownOutline, thumbsUpOutline, arrowBackOutline, reload, volumeMediumOutline });
  }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.mode = params['mode'];
      await this.load();
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
  }

  speak() {
    let text = this.rotated ? this.flashcardBackText : this.flashcardFrontText;
    this.knownAbbreviations.forEach(entry => text = text.replaceAll(entry.abbreviation, entry.word))
    const language = this.rotated ? this.flashcardBackLanguage : this.flashcardFrontLanguage;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
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

  goBack() {
    this.location.back();
  }

  async continuePractice() {
    this.index = -1;
    this.finished = false;
    await this.load();
  }

  private async load() {
    this.vocables = await this.practiceService.getVocabularyToPractice();
    if (this.vocables.length != 0) {
      this.results = new Array(this.vocables.length)
      this.showNext();
    }
    else {
      this.finished = true;
    }
  }

  private showNext() {
    if (this.index == this.vocables.length - 1) {
      this.finished = true;
      this.correctPercentage = (this.results.filter(result => result === true).length / this.results.length) * 100;
    }
    else {
      this.index++;
      this.currentVocable = this.vocables[this.index]
      this.updateFlashcard();
      this.rotated = false;
    }
  }

  private updateFlashcard() {
    let mode = this.mode;
    if (mode == PracticeMode.RANDOM) {
      mode = Math.random() >= 0.5 ? PracticeMode.FOREIGN_TO_NATIVE : PracticeMode.NATIVE_TO_FOREIGN
    }
    switch (mode) {
      case PracticeMode.FOREIGN_TO_NATIVE:
        this.flashcardFrontText = this.currentVocable.foreignMeaning;
        this.flashcardBackText = this.currentVocable.nativeMeanings.join(', ');
        this.flashcardFrontLanguage = "en-UK";
        this.flashcardBackLanguage = "de-DE";
        break;
      case PracticeMode.NATIVE_TO_FOREIGN:
        this.flashcardFrontText = this.currentVocable.nativeMeanings.join(', ');
        this.flashcardBackText = this.currentVocable.foreignMeaning;
        this.flashcardFrontLanguage = "de-DE";
        this.flashcardBackLanguage = "en-UK";
        break;
    }
  }
}
