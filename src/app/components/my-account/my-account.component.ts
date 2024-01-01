import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('eshop');
  }
}