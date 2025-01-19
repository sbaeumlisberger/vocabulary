import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ViewWillEnter,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonProgressBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, rocketOutline, schoolOutline, trendingUpOutline, trophyOutline } from 'ionicons/icons';
import { ThemeService } from 'src/app/services/theme.service';
import { PracticeLevel } from '../../../models/practice-level.model';
import { StatisticsService } from '../../../services/statistics.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'vt-statistics-overview-page',
  templateUrl: './statistics-overview-page.component.html',
  styleUrls: ['./statistics-overview-page.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonProgressBar, DecimalPipe],
})
export class SatisticsOverviewPageComponent implements ViewWillEnter {
  vocabularyCount: number = 0;

  newOrNeverCorrectCount: number = 0;
  newOrNeverCorrectPercent: number = 0;

  atLeastOnceCorrectCount: number = 0;
  atLeastOnceCorrectPercent: number = 0;

  improvingCount: number = 0;
  improvingPercent: number = 0;

  goodCount: number = 0;
  goodPercent: number = 0;

  excellentCount: number = 0;
  excellentPercent: number = 0;

  praticeLevelEnum = PracticeLevel;

  constructor(
    private readonly statisticsService: StatisticsService,
    private readonly themeService: ThemeService,
    private readonly router: Router,
  ) {
    addIcons({
      rocketOutline,
      schoolOutline,
      trendingUpOutline,
      checkmarkOutline,
      trophyOutline,
    });
  }

  async ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#ffffff');
    await this.loadStatistics();
  }

  private async loadStatistics() {
    this.vocabularyCount = await this.statisticsService.getVocabularyCount();

    this.newOrNeverCorrectCount = await this.statisticsService.getVocabularyCountByPractiveLevel(
      PracticeLevel.NewOrNeverCorrect,
    );
    this.newOrNeverCorrectPercent = (this.newOrNeverCorrectCount / this.vocabularyCount) * 100;

    this.atLeastOnceCorrectCount = await this.statisticsService.getVocabularyCountByPractiveLevel(
      PracticeLevel.AtLeastOnceCorrect,
    );
    this.atLeastOnceCorrectPercent = (this.atLeastOnceCorrectCount / this.vocabularyCount) * 100;

    this.improvingCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Improving);
    this.improvingPercent = (this.improvingCount / this.vocabularyCount) * 100;

    this.goodCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Good);
    this.goodPercent = (this.goodCount / this.vocabularyCount) * 100;

    this.excellentCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Excellent);
    this.excellentPercent = (this.excellentCount / this.vocabularyCount) * 100;
  }

  showList(practiceLevel: PracticeLevel) {
    this.router.navigate(['statistics/level-list', practiceLevel]);
  }
}
