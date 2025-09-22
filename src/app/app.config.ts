import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    {
      provide: APP_INITIALIZER,
      useValue: () => {
        const originalWarn = console.warn;
        console.warn = (...args) => {
          if (typeof args[0] === 'string' && args[0].includes('Calling Firebase APIs outside of an Injection context')) {
            return;
          }
          originalWarn.apply(console, args);
        };
      },
      multi: true,
    }
  ]
};
