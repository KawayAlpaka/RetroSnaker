import { Component } from '@angular/core';
import { IonicPage,AlertController } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'game',
  segment: 'game'
})
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private wall:any;
  private mySnaker:any;
  private beans:any;

  constructor(
    // public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

    this.mySnaker = {
      speed:8,
      direction:"",
      life:"life",
      head:{
        x:100, y:100
      },
      bodys:[
        {x:90, y:100},
        {x:80, y:100},
      ]
    };
    this.beans = [];
    this.wall = {};
    this.wall.width = 1000;
    this.wall.height = 600;

    this._onKeydown = this.onKeydown.bind(this);
  }

  onKeydown(event){
    console.log("onKeydown");
    let snaker = this.mySnaker;
    switch (event.code){
      case "ArrowUp":
        if(snaker.direction != "down"){
          snaker.direction = "up";
        }
        break;
      case "ArrowDown":
        if(snaker.direction != "up"){
          snaker.direction = "down";
        }
        break;
      case "ArrowLeft":
        if(snaker.direction != "right"){
          snaker.direction = "left";
        }
        break;
      case "ArrowRight":
        if(snaker.direction != "left"){
          snaker.direction = "right";
        }
        break;
    }
  }
  private _onKeydown:any;

  ngOnInit(){
    console.log("game ngOnInit");
    window.addEventListener("keydown",this._onKeydown);
    setInterval(()=>{
      if (this.mySnaker.life == "life"){
        this.run(this.mySnaker);
        this.eat();
        this.collide(this.mySnaker)
      }
    },100);
    setInterval(()=>{
      if (this.mySnaker.life == "life"){
        this.createBean();
      }
    },1000);
  }
  ngOnDestroy(){
    console.log("game ngOnDestroy");
    window.removeEventListener("keydown",this._onKeydown);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  test(){
    var snaker = this.mySnaker;
    snaker.head.x = snaker.head.x + snaker.speed;
  }

  createBean(){
    if(this.beans.length < 500){
      var bean:any = {};
      bean.y = 50 + parseInt(Math.random() * (this.wall.height - 100)+"");
      bean.x = 50 + parseInt(Math.random() * (this.wall.width - 100)+"");
      this.beans.push(bean);
    }
  }

  run(snaker:any){
    for(let i =snaker.bodys.length -1;i>=0;i--){
      if(i==0){
        snaker.bodys[i].x = snaker.head.x;
        snaker.bodys[i].y = snaker.head.y;
      }else{
        snaker.bodys[i].x = snaker.bodys[i-1].x;
        snaker.bodys[i].y = snaker.bodys[i-1].y;
      }
    }
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
  private getDistance(p1,p2){
    var h =  Math.abs(p1.y - p2.y);
    var w = Math.abs(p1.x - p2.x);
    return h + w;
    // return Math.sqrt(Math.pow(h,2) + Math.pow(w,2));
  }
  private eat(){
    this.beans = this.beans.filter((bean)=>{
      if(this.getDistance(this.mySnaker.head,bean)<=12){
        this.grow(this.mySnaker);
        return false;
      }else {
        return true;
      }
    });
  }
  private grow(snaker){
    let lastBody = snaker.bodys[snaker.bodys.length-1];
    if(snaker.bodys.length == 0){
      lastBody = snaker.head;
    }
    snaker.bodys.push({x:lastBody.x,y:lastBody.y});
  }
  private collide(snaker){
    if(snaker.life == "life"){
      if(snaker.head.x<=0 || snaker.head.x >= this.wall.width || snaker.head.y<=0 || snaker.head.y >= this.wall.height){
        snaker.life = "die";
      }
      if(snaker.bodys.length >= 8){
        snaker.bodys.forEach((body)=>{
          if(this.getDistance(snaker.head,body)<=5){
            snaker.life = "die";
          }
        });
      }
      if(snaker.life == "die"){
        let confirm = this.alertCtrl.create({
          title: 'Game Over',
          message: 'Your are '+ this.mySnaker.bodys.length + " cm long",
          buttons: [
            {
              text: 'Again',
              handler: () => {
                console.log('Again clicked');
                this.mySnaker.head.x = 300;
                this.mySnaker.head.y = 300;
                this.mySnaker.bodys = [];
                this.mySnaker.life = "life";
                this.beans = [];
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
