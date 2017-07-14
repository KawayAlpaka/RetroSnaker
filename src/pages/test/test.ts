import { Component ,ViewChild} from '@angular/core';
import { IonicPage ,Nav,MenuController} from 'ionic-angular';
import {TestIonicPage} from "../test-ionic/test-ionic";
import {TestTabsComponent} from "../../components/test-tabs/test-tabs";

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  @ViewChild(Nav) nav: Nav;
  rootPage = TestTabsComponent;
  pages: Array<{title: string, component?: any,link?:any}>;
  constructor(
    // public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController
  ) {
    this.pages = [
      { title: 'TestIonicPage', component: TestIonicPage },
      { title: 'TabsHome', link:"#/tabs/home" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  openPage(page) {
    if(page.component){
      this.menu.close();
      this.nav.setRoot(page.component);
    }else {
      window.location.href = page.link;
    }

  }

}
