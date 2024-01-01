import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(): void {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe((response) => {
      const user = response.find((answer: any) => {
        return answer.email === this.loginForm.value.email && answer.password === this.loginForm.value.password;
      });

      if (user) {
        alert('You are connected!');
        this.loginForm.reset();
        this.router.navigateByUrl('/my-account');
      } else {
        alert('Please Sign Up!');
        this.router.navigateByUrl('/signup');
      }
    });
  }
}
