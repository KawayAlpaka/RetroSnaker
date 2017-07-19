import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppProvider {

  // public nav:any;
  public setNav(nav){
    // this.nav = nav;
    this.navPromise = new Promise((resolve,reject)=>{
      this.navPromiseResolve(nav);
      resolve(nav);
    });
  }
  public getNav(){
    return this.navPromise;
  }
  public hiddenNav:boolean = true;
  private navPromiseResolve = null;
  private navPromise:Promise<any>;
  constructor() {
    console.log('Hello AppProvider Provider');
    this.navPromise = new Promise((resolve,reject)=>{
      this.navPromiseResolve = resolve;
    })
  }

}
