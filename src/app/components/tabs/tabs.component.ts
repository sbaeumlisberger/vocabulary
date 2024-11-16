import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { listOutline, schoolOutline, statsChartOutline, cogOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'vt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsComponent {
  constructor() {
    addIcons({ listOutline, schoolOutline, statsChartOutline, cogOutline });
  }
}
