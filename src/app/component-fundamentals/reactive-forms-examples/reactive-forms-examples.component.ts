import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-examples',
  templateUrl: './reactive-forms-examples.component.html',
  styleUrls: ['./reactive-forms-examples.component.scss']
})
export class ReactiveFormsExamplesComponent implements OnInit {

  constructor() { }

  username = new FormControl('',Validators.required);
  password =  new FormControl('')

  profile = new FormGroup({
    firstname :new FormControl(''),
    lastname : new FormControl(''),
    Place : new FormControl(''),
    mobile :new FormControl('')
  })

  educationDetails = new FormGroup({
    qualification: new FormControl('',Validators.required),
    passoutYear : new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]),
    university : new FormControl('')
  })

  ngOnInit(): void {
  }

  SubmitProfile(){
    
    console.log(this.profile)
    console.log("Mobile Number" + this.profile.value.mobile)
    console.log("Place" + this.profile.value.Place)

  }

  SubmitEducation(){
    this.educationDetails.markAllAsTouched();
    if(this.educationDetails.valid){
      console.log(this.educationDetails.value.qualification)
      console.log(this.educationDetails.value.passoutYear)
    }else{
      console.log("Enter the required fields")
    }
   
  }

  update(){
    this.username.setValue('dummy')




  }

  // studentSubmit(){
  //   this.student.markAllAsTouched();
  // }

  submit(){
    if(this.username.valid){

    }
    console.log("Form Object" + this.username)
   console.log("User entered Value" + this.username.value)
  }

}
