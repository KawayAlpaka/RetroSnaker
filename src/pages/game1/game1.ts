import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage,AlertController } from 'ionic-angular';

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
  private preRefreshTime:number;
  private shouldRefresh:boolean;

  constructor(
    // public navCtrl: NavController, public navParams: NavParams
    public alertCtrl: AlertController
  ) {
    this._onKeydown = this.onKeydown.bind(this);
    this.mySnaker = {
      speed:8,
      direction:"right",
      life:"life",
      long:300,
      his:[],
      head:{
        x:100, y:100
      }
    };

  }

  ngOnInit(){
    console.log(this.canvas.nativeElement);
    this.ctx = this.canvas.nativeElement.getContext("2d");
    window.addEventListener("keydown",this._onKeydown);

    this.preRefreshTime = Date.now();
    this.shouldRefresh = true;
    var ani = ()=> {
      this.run(this.mySnaker);
      this.refreshCanvas(this.ctx);
      if(this.shouldRefresh){
        window.requestAnimationFrame(ani);
      }

    };
    window.requestAnimationFrame(ani);
  }
  ngOnDestroy(){
    console.log("game1 ngOnDestroy");
    this.shouldRefresh = false;
    window.removeEventListener("keydown",this._onKeydown);
  }
  run(snaker:any){
    let now = Date.now();
    let durTime = now - this.preRefreshTime;
    let s = (durTime/100) * snaker.speed;
    this.preRefreshTime = now;

    if(snaker.life == "life"){
      switch (snaker.direction){
        case "up":
          snaker.head.y = snaker.head.y - s;
          break;
        case "down":
          snaker.head.y = snaker.head.y + s;
          break;
        case "left":
          snaker.head.x = snaker.head.x - s;
          break;
        case "right":
          snaker.head.x = snaker.head.x + s;
          break;
      }
    }

  }
  changeDirection(snaker,direction){
    snaker.direction = direction;
    snaker.his.unshift({x:snaker.head.x,y:snaker.head.y});
  }
  onKeydown(event){
    console.log("onKeydown");
    let snaker = this.mySnaker;
    console.log(console.log(snaker.his));
    switch (event.code){
      case "ArrowUp":
        if(snaker.direction != "down" || snaker.direction != "up" ){
          this.changeDirection(snaker,"up");
        }
        break;
      case "ArrowDown":
        if(snaker.direction != "down" || snaker.direction != "up" ){
          this.changeDirection(snaker,"down");
        }
        break;
      case "ArrowLeft":
        if(snaker.direction != "right" || snaker.direction != "left"){
          this.changeDirection(snaker,"left");
        }
        break;
      case "ArrowRight":
        if(snaker.direction != "right" || snaker.direction != "left"){
          this.changeDirection(snaker,"right");
        }
        break;
    }
  }
  private _onKeydown:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game1Page');
  }
  refreshCanvas(ctx){
    if(this.mySnaker.life == "life"){
      ctx.clearRect(0,0,500, 500);
      ctx.beginPath();
      ctx.arc(this.mySnaker.head.x, this.mySnaker.head.y, 4, 0, Math.PI * 2);
      ctx.moveTo(this.mySnaker.head.x,this.mySnaker.head.y);
      ctx.lineWidth = 6;
      let _long = this.mySnaker.long;
      for(let i=0;i<this.mySnaker.his.length;i++){
        let distance = this.getDistance(this.mySnaker.head,this.mySnaker.his[i]);
        if(_long > distance){
          _long = _long - distance;
          ctx.lineTo(this.mySnaker.his[i].x,this.mySnaker.his[i].y);
        }else{
          let prePoint:any = {};
          if(i==0){
            prePoint.x = this.mySnaker.head.x;
            prePoint.y = this.mySnaker.head.y;
          }else{
            prePoint.x = this.mySnaker.his[i-1].x;
            prePoint.y = this.mySnaker.his[i-1].y;
          }
          let point:any = {};
          // 倾斜的情况
          // let rad = Math.atan((this.mySnaker.his[i].y-prePoint.y)/(this.mySnaker.his[i].x-prePoint.x));
          // point.x = (Math.cos(rad) * _long) + prePoint.x;
          // point.y = (Math.sin(rad) * _long) + prePoint.y;
          // 但目前没有倾斜的情况，上下左右操作时，都是垂直或水平的
          if(this.mySnaker.his[i].y == prePoint.y){
            if((this.mySnaker.his[i].x - prePoint.x)>0 ){
              point.x = prePoint.x + _long;
            }else{
              point.x = prePoint.x - _long;
            }
            point.y = prePoint.y;
          }
          if(this.mySnaker.his[i].x == prePoint.x){
            if((this.mySnaker.his[i].y - prePoint.y)>0 ){
              point.y = prePoint.y + _long;
            }else{
              point.y = prePoint.y - _long;
            }
            point.x = prePoint.x;
          }
          this.mySnaker.his[i] = point;
          ctx.lineTo(point.x,point.y);
          this.mySnaker.his.splice(i+1,this.mySnaker.his.length - (i+1));

          break;
        }
      }
      ctx.stroke();
      //碰撞检查-自身
      for(let i=2;i<this.mySnaker.his.length;i++){
        let distance = this.PointToSegDist(this.mySnaker.head.x,this.mySnaker.head.y,this.mySnaker.his[i-1].x,this.mySnaker.his[i-1].y,this.mySnaker.his[i].x,this.mySnaker.his[i].y);
        if(distance < 10){
          console.log(distance);
          console.log(this.mySnaker);
          this.mySnaker.life = "die";
          let confirm = this.alertCtrl.create({
            title: 'Game Over',
            message: 'Game Over',
            buttons: [
              {
                text: 'Again',
                handler: () => {
                  console.log('Again clicked');
                  this.mySnaker.life = "life";
                  this.mySnaker.head.x = 300;
                  this.mySnaker.head.y = 300;
                  this.mySnaker.his = [];
                }
              },
              {
                text: 'Cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          confirm.present();
        }
      }
    }
  }
  private getDistance(p1,p2){
    var h =  Math.abs(p1.y - p2.y);
    var w = Math.abs(p1.x - p2.x);
    // return h + w;
    return Math.sqrt(Math.pow(h,2) + Math.pow(w,2));
  }

  private PointToSegDist(x, y, x1, y1, x2, y2) {
    let cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
    if (cross <= 0)
      return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));

    let d2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (cross >= d2)
      return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));

    let r = cross / d2;
    let px = x1 + (x2 - x1) * r;
    let py = y1 + (y2 - y1) * r;
    return Math.sqrt((x - px) * (x - px) + (y - py) * (y - py));
  }
}
