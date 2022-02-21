import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgEventBus } from 'ng-event-bus';
import { AddVocabularyComponent } from '../add-vocabulary/add-vocabulary.component';
import { VocabularyAddedEvent } from '../../../events/vocabulary-added.event';
import { VocabularyImportedEvent } from '../../../events/vocabulary-imported.event';
import { VocabularyUpdatedEvent } from '../../../events/vocabulary-updated.event';
import { IVocable } from '../../../models/vocable.model';
import { VocabularyService } from '../../../services/vocabulary.service';
import { ThemeService } from 'src/app/services/theme.service';

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
  }

  async ngOnInit() {
    await this.loadVocabulary();
  }

  async ionViewWillEnter() {
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

  private async openAddVocabularyComponent(componentProps = {}) {
    const modal = await this.modalController.create({
      component: AddVocabularyComponent,
      swipeToClose: true,
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
