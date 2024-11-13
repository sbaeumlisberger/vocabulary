import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SatisticsOverviewPage } from './statistics-overview/statistics-overview.page';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar, IonIcon } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SatisticsOverviewPage }]),
    StatisticsRoutingModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonProgressBar,
    IonIcon,
  ],
  declarations: [SatisticsOverviewPage],
})
export class StatisticsModule {}
