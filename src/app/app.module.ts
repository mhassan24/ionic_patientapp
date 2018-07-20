import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PatientdetailsPage  } from '../pages/patientdetails/patientdetails';
import {PatientlistPage  } from '../pages/patientlist/patientlist';
import {PatientviewPage  } from '../pages/patientview/patientview';

import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    HomePage,PatientdetailsPage,PatientlistPage,PatientviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,PatientdetailsPage,PatientlistPage,PatientviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
