import { Component,ElementRef } from '@angular/core';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private myEle:ElementRef) {
  }
  refresh(){
    this.items = [];
    for(let i=0;i<15;i++){
      this.items.push(i);
    }
    // setTimeout(()=>{
    //   this.myEle.nativeElement.querySelector(".scroll-content").scrollTop = 90;
    // },100);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestListPage');
    this.refresh();
  }

  doInfinite(infiniteScroll) {
    console.log('b Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }
      console.log('b Async operation has ended');
      infiniteScroll.complete();
    }, 3000);
  }
  doInfinite1(infiniteScroll) {
    console.log('t Begin async operation');
    setTimeout(() => {
      this.refresh();
      console.log('t Async operation has ended');
      infiniteScroll.complete();
    }, 3000);
  }

  myHeaderFn(record, recordIndex, records) {
    if (recordIndex % 5 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
  }

}
