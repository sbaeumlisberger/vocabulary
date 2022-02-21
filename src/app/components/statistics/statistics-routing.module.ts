import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatisticsPage } from './satistics/satistics.page';

const routes: Routes = [
  {
    path: '',
    component: SatisticsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule {}
