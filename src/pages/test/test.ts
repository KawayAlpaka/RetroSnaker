import { Component ,ViewChild} from '@angular/core';
import { IonicPage ,Nav,MenuController} from 'ionic-angular';
import {TestIonicPage} from "../test-ionic/test-ionic";

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
  rootPage = TestIonicPage;
  pages: Array<{title: string, component: any}>;
  constructor(
    // public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController
  ) {
    this.pages = [
      { title: 'TestIonicPage', component: TestIonicPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

}
