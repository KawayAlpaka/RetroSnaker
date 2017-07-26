import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haha',
  templateUrl: './haha.component.html'
  // ionic中要把样式引入去掉，默认就引入
  // styleUrls: ['./haha.component.scss']
})
export class HahaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("haha");
  }

}
