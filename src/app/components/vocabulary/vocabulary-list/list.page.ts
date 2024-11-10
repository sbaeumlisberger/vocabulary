import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { NgEventBus } from 'ng-event-bus';
import { AddVocabularyComponent } from '../add-vocabulary/add-vocabulary.component';
import { VocabularyAddedEvent } from '../../../events/vocabulary-added.event';
import { VocabularyImportedEvent } from '../../../events/vocabulary-imported.event';
import { VocabularyUpdatedEvent } from '../../../events/vocabulary-updated.event';
import { IVocable } from '../../../models/vocable.model';
import { VocabularyService } from '../../../services/vocabulary.service';
import { ThemeService } from 'src/app/services/theme.service';
import { addIcons } from "ionicons";
import { add, alertCircleOutline, arrowForwardCircleOutline, arrowUpCircleOutline, checkmarkCircleOutline, checkmarkDoneCircleOutline, chevronForwardCircleOutline, closeCircleOutline, trash } from "ionicons/icons";
import { PracticeLevel } from 'src/app/models/practice-level.model';

@Component({
  selector: 'vocabulary-list-page',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class VocabularyListPage implements OnInit {

  private static readonly BATCH_SIZE: number = 20;

  searchQuery: string = "";

  vocabulary: IVocable[] = [];

  canLoadMore: boolean = false;

  private offset: number = 0;

  constructor(private vocabularyService: VocabularyService, private eventBus: NgEventBus, private modalController: ModalController, private themeService: ThemeService) {
    this.eventBus.on(VocabularyAddedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = []
      await this.loadVocabulary();
    });
    this.eventBus.on(VocabularyUpdatedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = []
      await this.loadVocabulary();
    });
    this.eventBus.on(VocabularyImportedEvent.ID).subscribe(async () => {
      this.offset = 0;
      this.vocabulary = []
      await this.loadVocabulary();
    });
    addIcons({ add, trash, alertCircleOutline, arrowForwardCircleOutline, arrowUpCircleOutline, checkmarkCircleOutline, checkmarkDoneCircleOutline });
  }

  async ngOnInit() {
    await this.loadVocabulary();
  }

  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#ffffff');
  }

  async search(event) {
    console.log(event.detail.value)
    this.searchQuery = event.detail.value;
    if (!this.searchQuery) {
      this.offset = 0;
      this.vocabulary = []
      await this.loadVocabulary();
    }
    else {
      this.vocabulary = await this.vocabularyService.search(this.searchQuery, VocabularyListPage.BATCH_SIZE);
      this.canLoadMore = false;
    }
  }

  async loadMore(event) {
    await this.loadVocabulary();
    event.target.complete();
  }

  async deleteVocable(vocable: IVocable) {
    await this.vocabularyService.delete(vocable);
    this.vocabulary = this.vocabulary.filter(element => element != vocable);
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
        return vocable.practicedCount > 0 ? "alert-circle-outline" : "";
      case PracticeLevel.AtLeastOnceKnown:
        return "arrow-forward-circle-outline";
      case PracticeLevel.OnTheRightTrack:
        return "arrow-up-circle-outline";
      case PracticeLevel.Good:
        return "checkmark-circle-outline";
      case PracticeLevel.VeryGood:
        return "checkmark-done-circle-outline";
    }
  }

  toColor(vocable: IVocable) {
    switch (vocable.practiceLevel) {
      case PracticeLevel.NeverKnownOrPracticed:
        return "#de5d6e";
      case PracticeLevel.AtLeastOnceKnown:
        return "#ffb509";
      case PracticeLevel.OnTheRightTrack:
        return "#636eeb";
      case PracticeLevel.Good:
        return "#2dd36f";
      case PracticeLevel.VeryGood:
        return "#2dd36f";
    }
  }

  private async openAddVocabularyComponent(componentProps = {}) {
    const modal = await this.modalController.create({
      component: AddVocabularyComponent,
      presentingElement: document.querySelector('ion-router-outlet'),
      componentProps: componentProps
    });
    modal.onWillDismiss().then(data => {
      this.themeService.overwriteStatusBarColor('#ffffff');
    });
    this.themeService.overwriteStatusBarColor('#000000');
    modal.present();
  }

  private async loadVocabulary() {
    var result = await this.vocabularyService.load(this.offset, VocabularyListPage.BATCH_SIZE);
    this.offset += VocabularyListPage.BATCH_SIZE;
    this.vocabulary = this.vocabulary.concat(result);
    this.canLoadMore = result.length != 0;
  }

}
