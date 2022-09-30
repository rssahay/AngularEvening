import { Injectable } from '@angular/core';
import { CommonFeatureService } from './common-feature.service';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

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
  

  constructor(private commonFeat : CommonFeatureService) { }


  getName(){
    return 'Ryan';
  }

  getStudentDetails(){
    return this.studentDetails;
  }
}
