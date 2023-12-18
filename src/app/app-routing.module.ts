import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'account', component: MyAccountComponent, data: {type: 'myAccount'} },
  { path: 'login', component: MyAccountComponent, data: {type: 'login'} },
  { path: 'register', component: MyAccountComponent, data: {type: 'register'} },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
