import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'password',
    component: PasswordComponent,
  },
];
