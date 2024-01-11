import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  constructor(private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  logout() {
    this.cookieService.delete('userData');
    Swal.fire({
      text: 'Logged out successfully!',
      icon: 'success',
    });
    // this.cookieService.set('userData', response.token);
    this.router.navigate(['/signin']);
  }
}