import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(): void {
    this.authService.login().subscribe((response) => {
      const user = response.find((answer: any) => {
        return answer.email === this.loginForm.value.email && answer.password === this.loginForm.value.password;
      });

      if (user) {
        alert('You are connected!');
        this.loginForm.reset();
        this.authService.isConnected = true;
        this.router.navigateByUrl('/cart/order');
      } else {
        alert('Please Sign Up!');
        // this.router.navigateByUrl('/signup');
      }
    });
  }
}
