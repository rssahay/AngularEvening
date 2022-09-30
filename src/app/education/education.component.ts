import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UserdetailsService } from '../Services/userdetails.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
 
})
export class EducationComponent implements OnInit {
 recievedData :any
  constructor(private _location : Location,
    private _userDetails : UserdetailsService) { }

  ngOnInit(): void {
    this.recievedData = history.state;
    console.log("Data = ",this.recievedData)

    //using location
    console.log(this._location.getState())

    console.log(this._userDetails.getName())

    console.log("property check"+ this._userDetails.studentDetails)
    console.log("Student Info ="+ this._userDetails.getStudentDetails())
  }

}
