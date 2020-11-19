import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationComponent } from './reservation/reservation.component';

import { AdminHomeComponent } from './administrator/admin-home/admin-home.component';
import { AdminProfileComponent } from './administrator/admin-profile/admin-profile.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ReservationComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    ReservationDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'reservation', component: ReservationComponent},
      { path: 'reservation/detail', component: ReservationDetailComponent},
      { path: 'admin/home', component: AdminHomeComponent},
      { path: 'admin/profile', component: AdminProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
