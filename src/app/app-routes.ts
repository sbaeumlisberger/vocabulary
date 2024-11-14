import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs-routes').then((m) => m.ROUTES),
  },
];
