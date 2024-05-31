import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { JobService } from '../Service/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit{
  constructor(private http: HttpClient,private router: Router ,private route: ActivatedRoute) {
    
   }
  jobs:any = undefined
  team=0
  ngOnInit(): void {
  
      this.route.params.subscribe(param => {
        this.team = param['id']
      })
      if(this.team != 0){
        if(this.team!=undefined){
          this.http.get('http://localhost:3000/jobs/team/'+this.team).subscribe(
            request=>{
              this.jobs = request
              // console.log(request);
              // console.log(this.jobs);
            }
          )
        }else{
          this.http.get('http://localhost:3000/jobs').subscribe(
          request=>{
            this.jobs = request
            // console.log(request);
            // console.log(this.jobs);
          }
        )
        }
      }else{
        this.http.get('http://localhost:3000/jobs').subscribe(
        request=>{
          this.jobs = request
          // console.log(request);
          // console.log(this.jobs);
        }
      )
      }
    
  }
}
