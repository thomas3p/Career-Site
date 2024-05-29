import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  username: string = '';
  password: string = '';
  
  title:string = ''
  // qualifications
  // details
  // responsibility
  // teamId
  // locationId
  // typeId
  
  loginstatus = false
  // constructor() { }
  
  ngOnInit(): void {
    this.loginstatus = this.auth.getstatus()
  }

  login(){
    this.auth.login(this.username,this.password)
    this.loginstatus = this.auth.getstatus()
    
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
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobService,private http: HttpClient,private auth:AuthService) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      qualifications: this.fb.array([this.fb.control('')]),
      details: this.fb.array([this.fb.control('')]),
      responsibility: this.fb.array([this.fb.control('')]),
      teamId: ['', Validators.required],
      locationId: ['', Validators.required],
      typeId: ['', Validators.required]
    });
  }

  get_qualifications() {
    return this.jobForm.get('qualifications') as FormArray;
  }

  get_details() {
    return this.jobForm.get('details') as FormArray;
  }

  get_responsibility() {
    return this.jobForm.get('responsibility') as FormArray;
  }

  addQualification() {
    this.qualifications.push(this.fb.control(''));
  }

  addDetail() {
    this.details.push(this.fb.control(''));
  }

  addResponsibility() {
    this.responsibility.push(this.fb.control(''));
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.createJob(this.jobForm.value).subscribe(response => {
        console.log('Job created successfully', response);
      }, error => {
        console.error('Error creating job', error);
      });
    }
  }
}
