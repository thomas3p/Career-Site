import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LocationsComponent } from './locations/locations.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
