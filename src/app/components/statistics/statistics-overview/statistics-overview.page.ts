import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { checkmarkOutline, rocketOutline, schoolOutline, trendingUpOutline, trophyOutline } from "ionicons/icons";
import { ThemeService } from 'src/app/services/theme.service';
import { PracticeLevel } from '../../../models/practice-level.model';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
    selector: 'statistics-overview-page',
    templateUrl: 'statistics-overview.page.html',
    styleUrls: ['statistics-overview.page.scss'],
})
export class SatisticsOverviewPage implements ViewWillEnter {

    vocabularyCount: number = 0;

    neverKnownOrPracticedCount: number = 0;
    neverKnownOrPracticedPercent: number = 0;

    atLeastOnceCount: number = 0;
    atLeastOncePercent: number = 0;

    onTheRightTackCount: number = 0;
    onTheRightTackPercent: number = 0;

    goodCount: number = 0;
    goodPercent: number = 0;

    veryGoodCount: number = 0;
    veryGoodPercent: number = 0;

    praticeLevelEnum = PracticeLevel;

    constructor(private readonly statisticsService: StatisticsService, private readonly themeService: ThemeService, private readonly router: Router) {
        addIcons({ rocketOutline, schoolOutline, trendingUpOutline, checkmarkOutline, trophyOutline });
    }

    async ionViewWillEnter() {
        this.themeService.overwriteStatusBarColor('#ffffff');
        await this.loadStatistics();
    }

    private async loadStatistics() {
        this.vocabularyCount = await this.statisticsService.getVocabularyCount();

        this.neverKnownOrPracticedCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.NeverKnownOrPracticed);
        this.neverKnownOrPracticedPercent = this.neverKnownOrPracticedCount / this.vocabularyCount * 100;

        this.atLeastOnceCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.AtLeastOnceKnown);
        this.atLeastOncePercent = this.atLeastOnceCount / this.vocabularyCount * 100;

        this.onTheRightTackCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.OnTheRightTrack);
        this.onTheRightTackPercent = this.onTheRightTackCount / this.vocabularyCount * 100;

        this.goodCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Good);
        this.goodPercent = this.goodCount / this.vocabularyCount * 100;

        this.veryGoodCount = await this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.VeryGood);
        this.veryGoodPercent = this.veryGoodCount / this.vocabularyCount * 100;
    }

    showList(practiceLevel: PracticeLevel) {
        this.router.navigate(['statistics/level-list', practiceLevel])
    }
}
