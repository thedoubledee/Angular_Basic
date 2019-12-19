import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  countries: any =[
  {"name" : "Afghanistan", "code" : "AF"},
  {"name" : "Åland Islands", "code" : "AX"},
  {"name" : "Australia", "code" : "AU"},
  {"name" : "Austria", "code" : "AT"},
  {"name" : "Azerbaijan", "code" : "AZ"},
  {"name" : "Bahamas", "code" : "BS"},
  {"name" : "Bahrain", "code" : "BH"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
