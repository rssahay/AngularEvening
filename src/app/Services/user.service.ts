import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getUserDetails(){
    return this._http.get('http://localhost:3000/users');
  }

  saveuserInfo(obj :any){
    return this._http.post('http://localhost:3000/users',obj)
  }
}
