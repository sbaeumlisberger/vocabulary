import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './flashcards/practice.component';
import { PracticeOverviewPage } from './overview/pratice-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeOverviewPage
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
export class PracticeTabPageRoutingModule { }
