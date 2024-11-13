import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-pratice-overview',
    templateUrl: 'pratice-overview.page.html',
    styleUrls: ['pratice-overview.page.scss']
})
export class PracticeOverviewPage {

    constructor(private themeService: ThemeService) {
    }

    ionViewWillEnter() {
        this.themeService.overwriteStatusBarColor('#f2f2f7');
    }

}
