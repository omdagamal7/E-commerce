import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = 'https://ecommerce.routemisr.com';
  userData: BehaviorSubject<any> = new BehaviorSubject('')
  constructor(private _httpClient:HttpClient) { 
    if (localStorage.getItem('token')) {
      this.getUserData()
    }
  }

  getUserData () {
    let encode = JSON.stringify(localStorage.getItem('token'))
    let decode = jwtDecode(encode)
    this.userData.next(decode)
  }

  SignUp(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseURL}/api/v1/auth/signup`,data)
  }

  logIn(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseURL}/api/v1/auth/signin`,data)
  }

  forgotPass(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseURL}/api/v1/auth/forgotPasswords`,data)
  }
  verifyCode(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseURL}/api/v1/auth/verifyResetCode`,{
      "resetCode":`${data}`
    })
  }
  resetPass(data: any): Observable<any> {
    return this._httpClient.put(`${this.baseURL}/api/v1/auth/resetPassword`,data)
  }
  changePassword(data: any) : Observable<any> {
    return this._httpClient.put(`${this.baseURL}/api/v1/users/changeMyPassword`,data)
  }
  changeUserData(data: any) : Observable<any> {
    return this._httpClient.put(`${this.baseURL}/api/v1/users/updateMe/`,data )
  }
}
