import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatisticsOverviewPage } from './statistics-overview/statistics-overview.page';
import { LevelListComponent } from './level-list/level-list.component';

const routes: Routes = [
  {
    path: '',
    component: SatisticsOverviewPage,
  },
  {
    path: 'level-list/:praticeLevel',
    component: LevelListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
