import { Component,ViewChild } from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import {TestIonicPage} from "../pages/test-ionic/test-ionic";
import {AppProvider} from "../providers/app/app";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TestIonicPage;
  rootPage:any = null;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component?: any,link?:any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    ,public app:AppProvider,public menu: MenuController
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      app.setNav(this.nav);
      // app.nav = this.nav;
    });
    this.pages = [
      { title: 'TestIonicPage', component: TestIonicPage },
      { title: 'TabsHome', link:"#/tabs/home" }
    ];
  }
  openPage(page) {
    if(page.component){
      this.menu.close();
      this.app.getNav()
        .then((nav)=>{
          nav.setRoot(page.component);
        });
    }else {
      this.menu.close();
      window.location.href = page.link;
      this.app.getNav()
        .then((nav)=>{
          // 设置为空会报错 总之关闭不了nav...
          // nav.setRoot(null);
          this.app.hiddenNav = true;
        });
    }
  }
}

