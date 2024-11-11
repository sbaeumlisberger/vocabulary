import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonRow, IonToolbar } from '@ionic/angular/standalone';
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
export class LevelListComponent implements OnInit {

  private static readonly BATCH_SIZE: number = 20;

  vocabulary: IVocable[] = [];

  canLoadMore: boolean = false;

  private praticeLevel: PracticeLevel;

  private offset: number = 0;

  constructor(private readonly vocabularyService: VocabularyService, private readonly route: ActivatedRoute, private readonly themeService: ThemeService) { }

  async ngOnInit() {
    this.themeService.overwriteStatusBarColor('#f7f7f7', '#0d0d0d');
    this.praticeLevel = Number.parseInt(this.route.snapshot.paramMap.get('praticeLevel')) as PracticeLevel;
    await this.loadVocabulary();
  }

  async loadMore(event) {
    await this.loadVocabulary();
    event.target.complete();
  }

  private async loadVocabulary() {
    var result = await this.vocabularyService.loadForPracticeLevel(this.praticeLevel, this.offset, LevelListComponent.BATCH_SIZE);
    this.offset += LevelListComponent.BATCH_SIZE;
    this.vocabulary = this.vocabulary.concat(result);
    this.canLoadMore = result.length != 0;
  }

}
