import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonSearchbar,
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonInfiniteScroll,
  IonRow,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  checkmarkOutline,
  rocketOutline,
  schoolOutline,
  trash,
  trendingUpOutline,
  trophyOutline,
} from 'ionicons/icons';
import { NgEventBus } from 'ng-event-bus';
import { PracticeLevel } from 'src/app/models/practice-level.model';
import { ThemeService } from 'src/app/services/theme.service';
import { VocabularyAddedEvent } from '../../../events/vocabulary-added.event';
import { VocabularyImportedEvent } from '../../../events/vocabulary-imported.event';
import { VocabularyUpdatedEvent } from '../../../events/vocabulary-updated.event';
import { IVocable } from '../../../models/vocable.model';
import { VocabularyService } from '../../../services/vocabulary.service';
import { AddVocabularyComponent } from '../add-vocabulary/add-vocabulary.component';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-vocabulary-list-page',
  templateUrl: './vocabulary-list.page.html',
  styleUrl: './vocabulary-list.page.scss',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonSearchbar,
    IonList,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonInfiniteScroll,
    IonRow,
    IonInfiniteScrollContent,
  ],
})
export class VocabularyListPage implements OnInit {
  private static readonly BATCH_SIZE: number = 20;

  searchQuery: string = '';

  vocabulary: IVocable[] = [];

  showPracticeLevel: boolean = false;

  canLoadMore: boolean = false;

  private offset: number = 0;

  constructor(
    private readonly vocabularyService: VocabularyService,
    private readonly eventBus: NgEventBus,
    private readonly modalController: ModalController,
    private readonly themeService: ThemeService,
    private readonly settingsService: SettingsService,
  ) {
    this.eventBus.on(VocabularyAddedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = [];
      await this.loadVocabulary();
    });
    this.eventBus.on(VocabularyUpdatedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = [];
      await this.loadVocabulary();
    });
    this.eventBus.on(VocabularyImportedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = [];
      await this.loadVocabulary();
    });

    addIcons({
      add,
      trash,
      schoolOutline,
      trendingUpOutline,
      checkmarkOutline,
      trophyOutline,
      rocketOutline,
    });
  }

  async ngOnInit() {
    await this.loadVocabulary();
  }

  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#ffffff');
    this.showPracticeLevel = this.settingsService.getShowPracticeLevelInVocabularyList();
  }

  async search(event: { detail: { value?: string } }) {
    console.log(event.detail.value);
    this.searchQuery = event.detail.value;
    if (!this.searchQuery) {
      this.offset = 0;
      this.vocabulary = [];
      await this.loadVocabulary();
    } else {
      this.vocabulary = await this.vocabularyService.search(this.searchQuery, VocabularyListPage.BATCH_SIZE);
      this.canLoadMore = false;
    }
  }

  async loadMore(event: { target: { complete: () => void } }) {
    await this.loadVocabulary();
    event.target.complete();
  }

  async deleteVocable(vocable: IVocable) {
    await this.vocabularyService.delete(vocable);
    this.vocabulary = this.vocabulary.filter((element) => element != vocable);
  }

  async editVocable(vocable: IVocable) {
    this.openAddVocabularyComponent({ vocable: vocable });
  }

  async addVocable() {
    this.openAddVocabularyComponent();
  }

  toIcon(vocable: IVocable) {
    switch (vocable.practiceLevel) {
      case PracticeLevel.NeverKnownOrPracticed:
        return 'rocket-outline';
      case PracticeLevel.AtLeastOnceKnown:
        return 'school-outline';
      case PracticeLevel.OnTheRightTrack:
        return 'trending-up-outline';
      case PracticeLevel.Good:
        return 'checkmark-outline';
      case PracticeLevel.VeryGood:
        return 'trophy-outline';
    }
  }

  toColor(vocable: IVocable) {
    switch (vocable.practiceLevel) {
      case PracticeLevel.NeverKnownOrPracticed:
        return 'var(--ion-color-medium)';
      case PracticeLevel.AtLeastOnceKnown:
        return 'var(--ion-color-warning)';
      case PracticeLevel.OnTheRightTrack:
        return 'var(--ion-color-tertiary)';
      case PracticeLevel.Good:
        return 'var(--ion-color-success)';
      case PracticeLevel.VeryGood:
        return 'var(--ion-color-success)';
    }
  }

  private async openAddVocabularyComponent(componentProps = {}) {
    const modal = await this.modalController.create({
      component: AddVocabularyComponent,
      presentingElement: document.querySelector('ion-router-outlet'),
      componentProps: componentProps,
    });
    modal.onWillDismiss().then(() => {
      this.themeService.overwriteStatusBarColor('#ffffff');
    });
    this.themeService.overwriteStatusBarColor('#000000');
    modal.present();
  }

  private async loadVocabulary() {
    const result = await this.vocabularyService.load(this.offset, VocabularyListPage.BATCH_SIZE);
    this.offset += VocabularyListPage.BATCH_SIZE;
    this.vocabulary = this.vocabulary.concat(result);
    this.canLoadMore = result.length != 0;
  }
}
