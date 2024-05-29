import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';



import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LocationsComponent } from './locations/locations.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full'
  },
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
  {path:'jobs/:id',component:JobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
