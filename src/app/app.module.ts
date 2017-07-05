import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AppRoutingModule} from "./app-routing.module";
import {GamePage} from "../pages/game/game";
import {GamePageModule} from "../pages/game/game.module";
import {TestPageModule} from "../pages/test/test.module";

@NgModule({
  declarations: [
    MyApp,
    // GamePage,
    HomePage
  ],
  imports: [
    GamePageModule,
    TestPageModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // GamePage
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
