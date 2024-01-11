import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

/**
 *
 * @param: form
 */
const passwordsMatchValidator = (form: any) => {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }

  return null;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        full_name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: '',
      },
      {
        validators: passwordsMatchValidator,
      }
    );
  }

  register(): void {
    this.authService.register(this.registerForm.value).subscribe((response) => {
      Swal.fire({
        text: 'Account created successfully! Now please sign in',
        icon: 'success',
      });
      this.registerForm.reset();
      this.router.navigate(['/signin']);
    }, (error) => {
      Swal.fire({
        text: 'Internal server Error',
        icon: 'error',
      });
    });
  }
}
