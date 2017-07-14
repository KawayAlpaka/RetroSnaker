import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AppRoutingModule} from "./app-routing.module";
import {GamePageModule} from "../pages/game/game.module";
import {TestPageModule} from "../pages/test/test.module";
import {Game1PageModule} from "../pages/game1/game1.module";
import { TestTabsComponent } from '../components/test-tabs/test-tabs';
import { TabsComponent } from '../components/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestTabsComponent,
    TabsComponent
  ],
  imports: [
    GamePageModule,
    Game1PageModule,
    TestPageModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestTabsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
