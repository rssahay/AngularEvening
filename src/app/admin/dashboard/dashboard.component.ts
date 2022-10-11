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

    this._user.getFlightDetails().subscribe( response =>{
      console.log("Flight details "+ response)
    })
    this.saveflight();
    this.editflightrecords()
  }


  saveflight(){
    let obj =  {
      "from": "chennai",
      "to": "delhi",
      "duration" : "10N",
      "flights" : 1,
      "hotel" : 2,
      "Activities" : 3,
      "Price": 75000,
      "id":''
  }
    this._user.saveflight(obj).subscribe( res => {
      console.log("res" + res)
    })
  }


  editflightrecords(){
    let obj =  {
      "from": "leh",
      "to": "delhi",
      "duration" : "10N",
      "flights" : 1,
      "hotel" : 2,
      "Activities" : 3,
      "Price": 75000,
      "id":'2'
  }
    this._user.editflightrecords(2,obj).subscribe(res => {
      console.log("data updated" + res)
    },(error) => {console.log(error)})



    
    // this._user.editflightrecords(2,obj).subscribe({
    //   next(value) {
    //     console.log("data updated" + value)
    //   },
    //   error(err) {
    //     console.log(err)
    //   },
    // })
  }



}
