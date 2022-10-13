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
  edituserRecords :any
  disableSubmit :boolean = false;
  numbercheck= 50;
  decimalNumber = 4.70035
  CourseName = 'ANguLaRDevelopment'
  name : string=''
  collage :string='nit'

  today = new Date("2022-08-10");
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

  EditRecords(user :any){
    this.userForm.patchValue({
      email: user.email,
      password: user.password
    })
    this.edituserRecords = user
    this.disableSubmit = true
  }

  updateUserRecords(){
    let obj ={
      email : this.userForm.value.email,
      password : this.userForm.value.password,
      id : this.edituserRecords.id
    }
    
    this._userservice.edituserInfo(this.edituserRecords.id, obj).subscribe( res =>{
      console.log("Data updated "+ res)
      this.userForm.reset();
      this.getuserInfo();
      this.disableSubmit =false;

    })

  }

  deleteRecords(user :any){
    this._userservice.deleteUserInfo(user.id).subscribe(resposnse => {
      console.log("Data deleted ")
      this.getuserInfo();
    })

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
