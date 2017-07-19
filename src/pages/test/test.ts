import { Component ,ViewChild} from '@angular/core';
import { IonicPage ,Nav,MenuController} from 'ionic-angular';
import {TestIonicPage} from "../test-ionic/test-ionic";
import {TestTabsComponent} from "../../components/test-tabs/test-tabs";
import {AppProvider} from "../../providers/app/app";

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
  constructor(
    // public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,public app:AppProvider
  ) {

  }

  ngOnInit(){
    this.app.getNav()
      .then((nav)=>{
        nav.setRoot(TestTabsComponent);
        this.app.hiddenNav = false;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
}
