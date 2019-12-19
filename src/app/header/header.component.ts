import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public header_click = new EventEmitter();
  constructor() { }

  ngOnInit() {  }
   headerclick(){
     this.header_click.emit('Header Clicked');
     console.log('Header Clicked');
     }
     
   }

