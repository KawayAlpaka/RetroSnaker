import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test-list',
  templateUrl: 'test-list.html',
})
export class TestListPage {

  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for(let i=0;i<10;i++){
      this.items.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestListPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 3000);
  }

}
