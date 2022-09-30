import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonFeatureService } from 'src/app/Services/common-feature.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {
  loginmessage: any;
  constructor(private _commonfeature: CommonFeatureService,private fb :FormBuilder) { }

  loginForm  = this.fb.group({
    username : [''],
    password: ['']
  })

  ngOnInit(): void {
  }

  onSubmit() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let userData = this._commonfeature.getUserInfo();
    let verifiedUser = userData.filter((el: any) => {
      if (el.username == username && el.password == password) return el;
    })
    if (verifiedUser.length== 1) {
      sessionStorage.setItem('Active', 'true')
      this.loginmessage = 'login Success'
    } else if (verifiedUser == undefined || verifiedUser == null || verifiedUser.length ==0) {
      sessionStorage.setItem('Active', 'false')
      this.loginmessage = 'InValid User!!'
    }

  }

  onLogout(){
    sessionStorage.clear();
  }

}
