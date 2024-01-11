import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  authCheck() {
    return this.cookieService.get('userData') ? true : false
  }
  login(body: any) {
    return this.http.post('http://localhost:4000/authentication/login', body);
  }

  register(body: any) {
    return this.http.post('http://localhost:4000/authentication/register', body);
  }

}
