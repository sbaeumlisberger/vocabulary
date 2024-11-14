import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pratice-overview',
  templateUrl: 'pratice-overview.page.html',
  styleUrls: ['pratice-overview.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    RouterLink,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class PracticeOverviewPage {
  constructor(private themeService: ThemeService) {}

  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }
}
