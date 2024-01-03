import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    });
  }

  register(): void {
    this.http.post<any>('http://localhost:3000/signupUsers', this.registerForm.value).subscribe((response) => {
      alert('Registered successfully!');
      this.registerForm.reset();
      this.router.navigateByUrl('/signin');
    });
    console.log(this.registerForm.value);
  }
}
