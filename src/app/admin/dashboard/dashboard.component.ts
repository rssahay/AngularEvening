import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/Services/userdetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _user : UserdetailsService) { }

  ngOnInit(): void {
    console.log(this._user.getName())
  }

}
