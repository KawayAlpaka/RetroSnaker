import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestIonicPage } from './test-ionic';

@NgModule({
  declarations: [
    TestIonicPage,
  ],
  imports: [
    IonicPageModule.forChild(TestIonicPage),
  ],
  exports: [
    TestIonicPage
  ]
})
export class TestIonicPageModule {}
