import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { SingleUserComponent } from './shared/components/single-user/single-user.component';
import { LandingComponent } from './shared/components/landing/landing.component';

const routes: Routes = [
  {
    path : '',
    component : LandingComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'singleUser',
    component : SingleUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
