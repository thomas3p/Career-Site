import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './Page/teams/teams.component';
import { TeamDetailComponent } from './Page/team-detail/team-detail.component';
import { LocationsComponent } from './Page/locations/locations.component';
import { JobListComponent } from './Page/job-list/job-list.component';
import { JobComponent } from './Page/job/job.component';
import { HomeComponent } from './Page/home/home.component';
import { InternshipComponent } from './Page/internship/internship.component';
import { ContentInternshipComponent } from './Page/content-internship/content-internship.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'teams-detail/:title',
    component: TeamDetailComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path:'jobs',
    component:JobListComponent
  },
  {
    path:'jobs/team/:id',
    component:JobListComponent
  },
  {path:'jobs/:id',component:JobComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent,
   
  },{
    path: 'internship',
    component: InternshipComponent,
   
  },{
    path: 'contentInternship',
    component: ContentInternshipComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
