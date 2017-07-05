import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import {TestIonicPageModule} from "../test-ionic/test-ionic.module";

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    TestIonicPageModule,
    IonicPageModule.forChild(TestPage),
  ],
  exports: [
    TestPage
  ]
})
export class TestPageModule {}
