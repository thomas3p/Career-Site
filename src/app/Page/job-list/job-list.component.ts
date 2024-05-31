import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { JobService } from '../Service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit{
  constructor(private http: HttpClient,private router: Router ,private route: ActivatedRoute,private jobsev:JobService) {
    this.jobs = jobsev.getjob()
   }
  jobs:any = undefined
  team=0
  ngOnInit(): void {
  
      this.route.params.subscribe(param => {
        this.team = param['id']
      })
    
  }
}
