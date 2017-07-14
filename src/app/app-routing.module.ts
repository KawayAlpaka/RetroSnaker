import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router"
import {HomePage} from "../pages/home/home";
import {GamePage} from "../pages/game/game";
import {TestPage} from "../pages/test/test";
import {Game1Page} from "../pages/game1/game1";
import {TabsComponent} from "../components/tabs/tabs";


const routes:Routes = [
  {
    path:"tabs",component:TabsComponent,
    children: [
      {
        path: 'home', component: HomePage,
      },
      {
        path: 'game', component: GamePage
      },
      {
        path: 'game1', component: Game1Page
      }
    ]
  },
  {
    path:"test",component:TestPage
  },
  {
    path:"**",redirectTo:"tabs/home"
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
