import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs:any
  constructor(private http:HttpClient) { 
    
  }
  getjob(){
    return this.jobs
  }
}
