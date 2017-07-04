import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router"
import {HomePage} from "../pages/home/home";
import {GamePage} from "../pages/game/game";


const routes:Routes = [
  {
    path:"home",component:HomePage
  },
  {
    path:"game",component:GamePage
  },
  {
    path:"**",redirectTo:"home"
  }
];

console.log("routing-module");

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
