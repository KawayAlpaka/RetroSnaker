import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TestTabsComponent } from './test-tabs';

@NgModule({
  declarations: [
    TestTabsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TestTabsComponent
  ]
})
export class TestTabsComponentModule {}
