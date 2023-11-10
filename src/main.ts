import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { Error404Component } from './shared/error-404/error-404.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, AuthModule, UserModule],
  template: `
    <app-header [user]="firstname" />
    <router-outlet /> 
  `,
})
export class App {
  name = 'Angular';
  firstname = 'Marc';
}

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: Error404Component },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient()],
});
