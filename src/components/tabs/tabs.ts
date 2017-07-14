import { Component } from '@angular/core';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  text: string;

  constructor() {
    console.log('Hello TabsComponent Component');
    this.text = 'Hello World';
  }

}
