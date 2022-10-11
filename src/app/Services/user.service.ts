import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Authorization','qqwwdafafeertgdf22dcc')
            .set('content-type','application/json')


  constructor(private _http : HttpClient) { }

  getUserDetails(){
    return this._http.get('http://localhost:3000/users/',{'headers':this.headers});
  }

  saveuserInfo(obj :any){
    return this._http.post('http://localhost:3000/users',obj,{'headers':this.headers})
  }

  edituserInfo(id:any, obj:any){
    return this._http.put('http://localhost:3000/users/'+id,obj,{'headers':this.headers})
  }

  deleteUserInfo(id :any)
  {
    return this._http.delete('http://localhost:3000/users/'+id,{'headers':this.headers})
  }
}
