import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { NgEventBus } from 'ng-event-bus';

import { IonicRouteStrategy, provideIonicAngular, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
        AppRoutingModule,
        IonApp,
        IonRouterOutlet
    ],
    providers: [
        NgEventBus,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
