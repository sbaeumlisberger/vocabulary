import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vocabulary',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'vocabulary',
        loadChildren: () => import('../vocabulary/vocabulary-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'practice',
        loadChildren: () => import('../practice/practice-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings-tab.routes').then((m) => m.ROUTES),
      },
    ],
  },
];
