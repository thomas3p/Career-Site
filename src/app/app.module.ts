import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { JobCardComponent } from './Module/job-card/job-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';
// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobCardComponent,
    AdminComponent,
    JobListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
