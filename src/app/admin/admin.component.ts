import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  loginstatus=false;
  constructor(private http: HttpClient) { }
body={}
  login() {
    this.body={username:this.username,
      password:this.password
    }
    console.log(this.body);
    
    this.http.post('http://localhost:3000/login', this.body)
      .subscribe(
        response => {
          this.loginstatus = true
        },
        error => {
          console.log('Login failed:', error);
          // Handle login error (display error message, clear form fields, etc.)
        }
      );
  }
  title: string = '';
  qualifications: string = '';


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
