import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuthenticated: boolean;
  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private router: Router,
    ) {
    this.isAuthenticated = this.authService.authCheck();
    
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
