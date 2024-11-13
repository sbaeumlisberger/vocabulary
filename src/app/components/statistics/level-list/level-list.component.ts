import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonRow, IonToolbar, ViewWillEnter } from '@ionic/angular/standalone';
import { PracticeLevel } from 'src/app/models/practice-level.model';
import { IVocable } from 'src/app/models/vocable.model';
import { ThemeService } from 'src/app/services/theme.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonHeader, IonToolbar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonLabel, IonRow]
})
export class LevelListComponent implements OnInit, ViewWillEnter {

  private static readonly BATCH_SIZE: number = 20;

  vocabulary: IVocable[] = [];

  canLoadMore: boolean = false;

  private praticeLevel: PracticeLevel;

  private offset: number = 0;

  constructor(private readonly vocabularyService: VocabularyService, private readonly route: ActivatedRoute, private readonly themeService: ThemeService) { }

  async ngOnInit() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe(async params => {
      this.praticeLevel = Number.parseInt(params.get('praticeLevel')) as PracticeLevel;
      this.offset = 0;
      this.vocabulary = [];
      await this.loadBatch();
    });
  }

  ionViewWillEnter(): void {
    this.themeService.overwriteStatusBarColor('#f7f7f7', '#0d0d0d');
  }

  async loadMore(event: { target: { complete: () => void; }; }) {
    await this.loadBatch();
    event.target.complete();
  }

  private async loadBatch() {
    var result = await this.vocabularyService.loadForPracticeLevel(this.praticeLevel, this.offset, LevelListComponent.BATCH_SIZE);
    this.offset += LevelListComponent.BATCH_SIZE;
    this.vocabulary = this.vocabulary.concat(result);
    this.canLoadMore = result.length != 0;
  }

}
