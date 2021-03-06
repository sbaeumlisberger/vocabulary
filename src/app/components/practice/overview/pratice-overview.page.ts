import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'pratice-overview',
  templateUrl: 'pratice-overview.page.html',
  styleUrls: ['pratice-overview.page.scss']
})
export class PraticeOverviewPage {

  constructor(private themeService: ThemeService) {
  }

  async ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }

}
