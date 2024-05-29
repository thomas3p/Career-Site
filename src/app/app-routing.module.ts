import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { ContentInternshipComponent } from './content-internship/content-internship.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
