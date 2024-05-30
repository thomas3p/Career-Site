import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  username: string = '';
  password: string = '';
  
  title:string = ''
  qualifications = []
  details = []
  responsibility = []
  teamId = 0 
  locationId = 0
  typeId = 0 
  
  loginstatus = false
  constructor(private http: HttpClient,private auth:AuthService) { }
  
  ngOnInit(): void {
    this.loginstatus = this.auth.getstatus()
  }


  login(){
    this.auth.login(this.username,this.password)
    this.loginstatus = this.auth.getstatus()
    
  }
  createJob(): void {
    const jobData = { title: this.title, qualifications: this.qualifications 
      ,details:this.details,responsibility:this.responsibility,teamId:this.teamId
      ,locationId:this.locationId,typeId:this.typeId };
    this.http.post<any>('http://localhost:3000/jobs', jobData)
      .subscribe(
        response => {
          // Handle successful job creation
          console.log('Job created successfully:', response);
        },
        error => {
          // Handle job creation error
          console.error('Error creating job:', error);
        }
      );
  }
  
}
