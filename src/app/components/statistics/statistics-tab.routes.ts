import { SatisticsOverviewPage } from './statistics-overview/statistics-overview.page';
import { LevelListComponent } from './level-list/level-list.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: SatisticsOverviewPage,
  },
  {
    path: 'level-list/:praticeLevel',
    component: LevelListComponent,
  },
];
