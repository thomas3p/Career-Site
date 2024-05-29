import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamsComponent } from './teams/teams.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LocationsComponent } from './locations/locations.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginCardComponent } from './login-card/login-card.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AdminComponent,
    JobListComponent,
    TeamsComponent,
    NavbarComponent,
    TeamDetailComponent,
    LocationsComponent,
    LoginCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
