import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './flashcards/practice.component';
import { PraticeOverviewPage } from './overview/pratice-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PraticeOverviewPage
  },
  {
    path: 'flashcards/:mode',
    component: PracticeComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule { }
