import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { listOutline, schoolOutline, statsChartOutline, cogOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {
    addIcons({ listOutline, schoolOutline, statsChartOutline, cogOutline });
  }
}
