import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  @Output() event = new EventEmitter<boolean>();
  constructor(private http: HttpClient,private auth:AuthService) { }
  
  ngOnInit(): void {
    this.event.emit(this.auth.getstatus())
  }
  
  title: string = '';
  qualifications: string = '';

  login(){
    this.auth.login(this.username,this.password)
    this.event.emit(this.auth.getstatus())

    
  }
  createJob(): void {
    const jobData = { title: this.title, qualifications: this.qualifications /* Add other job data */ };
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
