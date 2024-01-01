import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
      name: [''],
      firstname: [''],
      email: [''],
      password: ['']
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
