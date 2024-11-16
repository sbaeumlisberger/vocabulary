import { Routes } from '@angular/router';
import { PracticeComponent } from './flashcards/practice.component';
import { PracticeOverviewPageComponent } from './overview/pratice-overview-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PracticeOverviewPageComponent,
  },
  {
    path: 'flashcards/:mode',
    component: PracticeComponent,
  },
];
