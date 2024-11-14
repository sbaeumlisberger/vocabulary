import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { listOutline, schoolOutline, statsChartOutline, cogOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    addIcons({ listOutline, schoolOutline, statsChartOutline, cogOutline });
  }
}
