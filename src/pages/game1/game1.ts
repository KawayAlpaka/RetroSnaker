import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the Game1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game1',
  templateUrl: 'game1.html',
})
export class Game1Page {

  @ViewChild("canvas")
  canvas: ElementRef;
  private mySnaker:any;
  private ctx:any;

  constructor(
    // public navCtrl: NavController, public navParams: NavParams
  ) {
  }

  ngOnInit(){
    console.log(this.canvas.nativeElement);
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.mySnaker = {
      speed:8,
      direction:"right",
      life:"life",
      head:{
        x:100, y:100
      },
      bodys:[
        {x:90, y:100},
        {x:80, y:100},
      ]
    };
    setInterval(()=>{
      this.run(this.mySnaker);
      this.refreshCanvas(this.ctx);
    },100);
  }
  run(snaker:any){
    switch (snaker.direction){
      case "up":
        snaker.head.y = snaker.head.y - snaker.speed;
        break;
      case "down":
        snaker.head.y = snaker.head.y + snaker.speed;
        break;
      case "left":
        snaker.head.x = snaker.head.x - snaker.speed;
        break;
      case "right":
        snaker.head.x = snaker.head.x + snaker.speed;
        break;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Game1Page');
  }
  refreshCanvas(ctx){
    ctx.clearRect(0,0,500, 500);
    ctx.beginPath();
    ctx.arc(this.mySnaker.head.x, this.mySnaker.head.y, 10, 0, Math.PI * 2);
    ctx.fill();
  }

}
