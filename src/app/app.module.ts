import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HistorialPage} from "../pages/historial/historial";
import  {TabsPage} from '../pages/tabs/tabs';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDyhJCtWKxpvSpFjyenDTJURxhO__Ls_ck",
    authDomain: "safebabys-fcdf4.firebaseapp.com",
    databaseURL: "https://safebabys-fcdf4.firebaseio.com",
    projectId: "safebabys-fcdf4",
    storageBucket: "",
    messagingSenderId: "488710952341"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistorialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistorialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
