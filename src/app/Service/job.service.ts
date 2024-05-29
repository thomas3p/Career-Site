import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs:any
  constructor(private http:HttpClient) { 
    this.http.get('http://localhost:3000/jobs').subscribe(
      request=>{
        this.jobs = request
        console.log(request);
        
      }
    )
  }
  getjob(){
    return this.jobs
  }
}
