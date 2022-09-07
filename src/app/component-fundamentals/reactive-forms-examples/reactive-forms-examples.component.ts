import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-examples',
  templateUrl: './reactive-forms-examples.component.html',
  styleUrls: ['./reactive-forms-examples.component.scss']
})
export class ReactiveFormsExamplesComponent implements OnInit {

  constructor() { }

  username = new FormControl('',Validators.required)

  ngOnInit(): void {
  }

  update(){
    this.username.setValue('dummy')



    
  }

  submit(){
    if(this.username.valid){

    }
    console.log("Form Object" + this.username)
   console.log("User entered Value" + this.username.value)
  }

}
