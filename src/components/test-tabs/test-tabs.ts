import { Component } from '@angular/core';
import {TestIonicPage} from "../../pages/test-ionic/test-ionic";
import {Game1Page} from "../../pages/game1/game1";

/**
 * Generated class for the TestTabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-tabs',
  templateUrl: 'test-tabs.html'
})
export class TestTabsComponent {

  text: string;
  tab1Root = TestIonicPage;
  tab2Root = Game1Page;
  constructor() {
    console.log('Hello TestTabsComponent Component');
    this.text = 'Hello World';
  }

}
