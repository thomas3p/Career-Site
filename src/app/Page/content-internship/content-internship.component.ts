import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';
import { ContentService } from 'src/content.service';

@Component({
  selector: 'app-content-internship',
  templateUrl: './content-internship.component.html',
  styleUrls: ['./content-internship.component.scss']
})
export class ContentInternshipComponent {
  jobs:any
  constructor(private contentService: ContentService, private router: Router,private jobsserv:JobService) {
    this.jobs = jobsserv.getjob()
     }
}
