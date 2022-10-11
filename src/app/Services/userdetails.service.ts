import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonFeatureService } from './common-feature.service';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  studentDetails = [{
    //key : value
    Firstname: 'akshay',
    lastname: 'kumar',
    address: 'pune',
    mobilenumber: 48965833
  },
  {
    //key : value
    Firstname: 'Amol',
    lastname: 'nn',
    address: 'pune',
    mobilenumber: 489688899
  },
  {
    //key : value
    Firstname: 'sujit',
    lastname: 'kk',
    address: 'pune',
    mobilenumber: 489688899

  },
  {
    //key : value
    Firstname: 'Aditya',
    lastname: 'kk',
    address: 'pune',
    mobilenumber: 489688899
  },
  {
    //key : value
    Firstname: 'shubham',
    lastname: 'pk',
    address: 'pune',
    mobilenumber: 489688899
  }]

  headers = new HttpHeaders()
    .set('Authorization', 'token')
    .set('content-type', 'application/json')

  constructor(private commonFeat: CommonFeatureService, private http: HttpClient) { }


  getName() {
    return 'Ryan';
  }

  getStudentDetails() {
    return this.studentDetails;
  }

  getFlightDetails() {
    return this.http.delete('http://localhost:3000/packages/13', { 'headers': this.headers })
  }

  saveflight(obj: any) {
    return this.http.post('http://localhost:3000/packages', obj)
  }

  editflightrecords(id: any, body: any) {
    return this.http.put('http://localhost:3000/packages/' + id, body)
  }
}
