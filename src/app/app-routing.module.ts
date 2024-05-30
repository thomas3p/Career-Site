import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { ContentInternshipComponent } from './content-internship/content-internship.component';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';



import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LocationsComponent } from './locations/locations.component';
import { JobComponent } from './job/job.component';

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
  },{
    path:'admin',
    component:AdminComponent
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
