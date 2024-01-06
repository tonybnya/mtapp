import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isConnected: boolean = false;

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<any>('http://localhost:3000/signupUsers');
  }
}
