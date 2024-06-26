import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/content.service';
import { Router } from '@angular/router';
// import { JobService } from '../Service/job.service';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit{
  @Input() content: any;
  @Input() job : any;
  jobs:any
  ngOnInit(): void {
    this.showAllContent();
    this.showAllJobs();
  }
  constructor(private contentService: ContentService, private router: Router,private jobsserv:JobService) {
  this.jobs = jobsserv.getjob()
   }

  showAllContent() {
    this.contentService.getContent().subscribe((content: any[]) => {
      this.content = content;
    });
  }
  showAllJobs() {
    this.contentService.getJobs().subscribe((job: any[]) => {
      this.job = job;
    });
  }
  getContentById(contentId: number) {
    this.contentService.getContentById(contentId).subscribe((content: any) => {
      console.log("🚀 ~ ProductService ~ getContentById ~ content:", content);
    });
  }
  getJobsById(jobID: number) {
    this.contentService.getJobsById(jobID).subscribe((job: any) => {
      console.log("🚀 ~ ProductService ~ getContentById ~ content:", job);
    });
  }

}
