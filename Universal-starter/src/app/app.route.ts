import { Routes, } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent }  from './error/error.component';

export const routes: Routes = [
  { 
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  { 
    path: 'app', loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**',    component: ErrorComponent
  }
];