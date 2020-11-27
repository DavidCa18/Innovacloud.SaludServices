import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ReservationListComponent } from './view/client/reservation-list/reservation-list.component';
import { IndexComponent } from './view/client/reservation/index/index.component';
import { RegisterComponent } from './view/client/reservation/register/register.component';
import { HeaderComponent } from './view/client/component/header/header.component';
import { TravelComponent } from './view/client/reservation/travel/travel.component';
import { TransportComponent } from './view/client/reservation/transport/transport.component';
import { LodgingComponent } from './view/client/reservation/lodging/lodging.component';
import { TravelExpensesComponent } from './view/client/reservation/travel-expenses/travel-expenses.component';
import { ApproverComponent } from './view/client/reservation/approver/approver.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    IndexComponent,
    RegisterComponent,
    HeaderComponent,
    TravelComponent,
    TransportComponent,
    LodgingComponent,
    TravelExpensesComponent,
    ApproverComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'client/reservation', component: IndexComponent, pathMatch: 'full' },
      { path: 'client/reservation/list/:data', component: ReservationListComponent },
    ]),
    DropDownsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
