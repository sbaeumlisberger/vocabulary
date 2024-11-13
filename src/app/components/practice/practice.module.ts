import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticeOverviewPage } from './overview/pratice-overview.page';
import { PracticeTabPageRoutingModule } from './practice-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel, IonIcon, IonButton, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PracticeTabPageRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonCard,
        IonCardContent,
        IonLabel,
        IonIcon,
        IonButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent
    ],
    declarations: [PracticeOverviewPage]
})
export class PracticeModule { }
