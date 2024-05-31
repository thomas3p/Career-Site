import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Page/home/home.component';
import { HeaderComponent } from './Module/header/header.component';
import { InternshipComponent } from './Page/internship/internship.component';
import { FooterComponent } from './Module/footer/footer.component';
import { ContentInternshipComponent } from './Page/content-internship/content-internship.component';
import { JobComponent } from './Page/job/job.component';
import { JobListComponent } from './Page/job-list/job-list.component';
import { TeamsComponent } from './Page/teams/teams.component';
import { NavbarComponent } from './Module/navbar/navbar.component';
import { TeamDetailComponent } from './Page/team-detail/team-detail.component';
import { LocationsComponent } from './Page/locations/locations.component';
import { HomeTeamsComponent } from './Module/home-teams/home-teams.component';
import { HomeLocationsComponent } from './Module/home-locations/home-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InternshipComponent,
    FooterComponent,
    ContentInternshipComponent,
    JobComponent,
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
