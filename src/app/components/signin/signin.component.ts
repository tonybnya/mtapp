import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // if (!this.authService.authCheck()) {
    //   this.router.navigate(['/signin']);
    // }
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
        });
        this.cookieService.set('userData', response.token);
        this.router.navigate(['/cart/order']);
      },
      (error) => {
        Swal.fire({
          text: 'Incorrect email or password',
          icon: 'error',
        });
      }
    );
  }
}
