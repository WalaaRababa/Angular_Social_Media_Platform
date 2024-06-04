import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
type loginDto={
  email:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:3000/'
  CreateUser(user:User):Observable<User>{
    return this.http.post<User>(this.url+'register',user)
  }
  isLoggedIn()
{
  let token=localStorage.getItem('token')
 return token?true:false
}
loginUser(userInfo:loginDto):Observable<loginDto>
{
  return this.http.post<loginDto>(this.url+'login',userInfo)
}
}

