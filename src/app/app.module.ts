import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeamsComponent } from './teams/teams.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LocationsComponent } from './locations/locations.component';
=======
// import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    NavbarComponent,
    TeamDetailComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
