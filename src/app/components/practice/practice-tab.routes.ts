import { Routes } from '@angular/router';
import { PracticeComponent } from './flashcards/practice.component';
import { PracticeOverviewPage } from './overview/pratice-overview.page';

export const ROUTES: Routes = [
  {
    path: '',
    component: PracticeOverviewPage,
  },
  {
    path: 'flashcards/:mode',
    component: PracticeComponent,
  },
];
