import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyListPage } from './vocabulary-list/vocabulary-list.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTabPageRoutingModule { }
