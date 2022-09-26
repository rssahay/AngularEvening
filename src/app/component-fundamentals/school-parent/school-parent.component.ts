import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-parent',
  templateUrl: './school-parent.component.html',
  styleUrls: ['./school-parent.component.scss']
})
export class SchoolParentComponent implements OnInit {

  studentName = 'Shubham'

  topperName =''

  schoolDetails ={
    name:'ishan',
    location :'pune',
    state:'MH',
    affiliation : {
      course :'science'
    }
  }

  studentDetails = [{
    //key : value
    Firstname : 'akshay',
    lastname : 'kumar',
    address : 'pune',
    mobilenumber : 48965833
  },
  {
    //key : value
    Firstname : 'Amol',
    lastname : 'nn',
    address : 'pune',
    mobilenumber : 489688899
  },
  {
    //key : value
    Firstname : 'sujit',
    lastname : 'kk',
    address : 'pune',
    mobilenumber : 489688899
  },
  {
    //key : value
    Firstname : 'Aditya',
    lastname : 'kk',
    address : 'pune',
    mobilenumber : 489688899
  },
  {
    //key : value
    Firstname : 'shubham',
    lastname : 'pk',
    address : 'pune',
    mobilenumber : 489688899
  }]

  userInfo = new FormGroup({
    firstname : new FormControl('xyz'),
    lastname: new FormControl(''),
    mobileno : new FormControl('',[Validators.maxLength(10)]),

    address : new FormGroup({
      lane1 : new FormControl(''),
      street :new FormControl(''),
      city: new FormControl('')
    })
  })

  email = new FormControl('')
  
  constructor() { }

  ngOnInit(): void {
  this.email.setValue('asd@gmail.com')

    this.userInfo.patchValue({
    //  firstname : 'bean',
      mobileno : 7896541230,
      address :{
        lane1 : 'viman nagar',
        city: 'Pune'
      }
    })

  }

  recieve(event:any){
    this.topperName= event
  //  alert(event)
  }


  submitdetails(){
    console.log(this.userInfo)
  }

}
