import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InternshipComponent } from './internship/internship.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContentInternshipComponent } from './content-internship/content-internship.component';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeTeamsComponent } from './home-teams/home-teams.component';
import { HomeLocationsComponent } from './home-locations/home-locations.component';
import { JobComponent } from './job/job.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { LoginCardComponent } from './login-card/login-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InternshipComponent,
    FooterComponent,
    ContentInternshipComponent,
  
    JobComponent,
    // AdminComponent,
    JobListComponent,
    TeamsComponent,
    NavbarComponent,
    TeamDetailComponent,
    LocationsComponent,
    HomeTeamsComponent,
    HomeLocationsComponent,
    FooterComponent,
    // AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
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
