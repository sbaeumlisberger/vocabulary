import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
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
        loadChildren: () => import('../vocabulary/vocabulary.module').then((m) => m.VocabularyModule),
      },
      {
        path: 'practice',
        loadChildren: () => import('../practice/practice.module').then((m) => m.PracticeModule),
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/statistics.module').then((m) => m.StatisticsModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
