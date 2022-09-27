import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 recievedData :any
  constructor(private _location : Location) { }

  ngOnInit(): void {
    this.recievedData = history.state;
    console.log("Data = ",this.recievedData)

    //using location
    console.log(this._location.getState())
  }

}
