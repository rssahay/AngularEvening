import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFeatureService {

  userChangedValue :boolean =false;

  unchangedChanges :boolean =false

  getunchangedChanges(){
    return this.unchangedChanges;
  }

  setuserChnagesChanges(value :boolean){
    this.unchangedChanges = value;
  }

  userDetails =[{
    username : "abc@gmail.com",
    password:1234
  },{
    username : "xyz@gmail.com",
    password : 7412
  }]

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
  
  constructor() { }

  getUserInfo(){
    return this.userDetails;
  }

  setUserchangedValue(value :boolean){
    this.userChangedValue = value;
  }

  getuserCHangedValue(){
    return this.userChangedValue;
  }
}
