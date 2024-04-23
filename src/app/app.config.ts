import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getAuth, provideAuth} from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyAIX1m3hz_aC5A3YEl1Ef30-Z9pgxwHdAQ",
  authDomain: "travel-tracker-32741.firebaseapp.com",
  projectId: "travel-tracker-32741",
  storageBucket: "travel-tracker-32741.appspot.com",
  messagingSenderId: "503280319997",
  appId: "1:503280319997:web:c978d771f00013444ded94"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), 
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ])
  ]
};
