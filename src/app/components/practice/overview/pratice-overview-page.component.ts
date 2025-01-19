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
  selector: 'vt-pratice-overview-page',
  templateUrl: './pratice-overview-page.component.html',
  styleUrls: ['./pratice-overview-page.component.scss'],
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
export class PracticeOverviewPageComponent {
  constructor(private themeService: ThemeService) {}

  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }
}
