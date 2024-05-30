import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  id:string=''
  data:any
  jobs:any
  team:any
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ){
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
    this.http.get('http://localhost:3000/jobs/'+this.id).subscribe(
      request=>{
        this.data = request
        this.http.get('http://localhost:3000/jobs/team/'+this.data.team.id).subscribe(
        req=>{
        this.jobs = req
        console.log(req);
        console.log(this.jobs);
      }
    )
      }
    )
    
  }
  
  ngOnInit(): void {
    
  }
}