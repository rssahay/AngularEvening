import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-http-example',
  templateUrl: './user-http-example.component.html',
  styleUrls: ['./user-http-example.component.scss']
})
export class UserHttpExampleComponent implements OnInit {

  userCredentials :any;
  constructor(private _userservice: UserService) { }

  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  ngOnInit(): void {
    this.getuserInfo();
  }

  SubmitUserRecords(){
    let obj ={
      email : this.userForm.value.email,
      password : this.userForm.value.password,
      id : ''
    }
    this._userservice.saveuserInfo(obj).subscribe(response =>{
      console.log("Data saved successfully" + response)
      this.getuserInfo();
      this.userForm.reset();
    })
  }

  EditRecords(){
    
  }



  getuserInfo() {
    this._userservice.getUserDetails().subscribe( response => {
      console.log("user info = "+response)
      this.userCredentials = response;
    })

    // this._userservice.getUserDetails().subscribe(
    //   {
    //     next(response) {
    //       console.log("user info = " + response)
          
    //     },
    //     error(err) {
    //       console.log("Error occured"+ err.message)
    //     },
    //   }
    // )
  }

}
