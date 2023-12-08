import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  register(userData: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/auth/addEtudiant`, userData, { responseType: 'text' });
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/generateToken`, user, { responseType: 'json' });
  }

  _is_logged(): boolean {
    return !localStorage.getItem("token");
  }

  verifyEtudiantToken(token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/validateEtudiantToken`, {token:token}, { responseType: 'json' });
  } 

  getRole(role: String) {
    let user;
    let localStorageData=localStorage.getItem("user") ;
    if(localStorageData != null){
      user = JSON.parse(localStorageData);
    }
    if (user.role == role)
      return true;
    return false
  }

}
