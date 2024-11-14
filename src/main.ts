import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { NgEventBus } from 'ng-event-bus';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { bootstrapApplication } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ROUTES } from './app/app-routes';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerImmediately',
      }),
    ),
    provideIonicAngular(),
    provideRouter(ROUTES),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NgEventBus,
  ],
}).catch((err) => console.log(err));
