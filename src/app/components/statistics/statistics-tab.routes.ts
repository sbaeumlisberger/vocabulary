import { SatisticsOverviewPageComponent } from './statistics-overview/statistics-overview-page.component';
import { LevelListComponent } from './level-list/level-list.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: SatisticsOverviewPageComponent,
  },
  {
    path: 'level-list/:praticeLevel',
    component: LevelListComponent,
  },
];
