import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GamePage} from "../game/game";

/**
 * Generated class for the TestIonicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'my-page',
  segment: 'some-path'
})
@Component({
  selector: 'page-test-ionic',
  templateUrl: 'test-ionic.html',
})
export class TestIonicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestIonicPage');
  }

  itemTapped(event) {
    this.navCtrl.push(TestIonicPage, {
      // item: item
    });
  }
  goToGame(){
    this.navCtrl.push(GamePage, {
      // item: item
    });
  }

}
