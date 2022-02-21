import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SatisticsPage } from './satistics/satistics.page';

import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SatisticsPage }]),
    StatisticsRoutingModule,
  ],
  declarations: [SatisticsPage]
})
export class StatisticsModule {}
