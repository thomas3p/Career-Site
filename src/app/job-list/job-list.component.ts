import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../Service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit{
  constructor(private http: HttpClient,private router: Router) { }
  jobs:any = undefined
  ngOnInit(): void {
    this.http.get('http://localhost:3000/jobs').subscribe(
      request=>{
        this.jobs = request
        // console.log(request);
        // console.log(this.jobs);
      }
    )
  }
  gotojob(id:number){
    location.href='/job'+id

  }
}
