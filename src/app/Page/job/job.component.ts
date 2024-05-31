import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

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
  applicationForm: FormGroup;
  resumeFile: File | null = null;
  coverLetterFile: File | null = null;
  // fb: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private jobserv:JobService
  ){
    this.route.params.subscribe(param => {
      this.id = param['id']
      this.data = jobserv.getJobById(this.id)
      this.jobs = jobserv.getjob()
      // console.log(this.jobs);
      
    })
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+66', Validators.required],
      phone: ['', Validators.required],
      linkedinProfile: ['']
    });
  }
  
  ngOnInit(): void {
    
  }
  onFileChange(event: any, fileType: string): void {
    const file = event.target.files[0];
    if (fileType === 'resume') {
      this.resumeFile = file;
    } else if (fileType === 'coverLetter') {
      this.coverLetterFile = file;
    }
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      const formData = new FormData();
      formData.append('firstName', this.applicationForm.get('firstName')?.value);
      formData.append('lastName', this.applicationForm.get('lastName')?.value);
      formData.append('email', this.applicationForm.get('email')?.value);
      formData.append('countryCode', this.applicationForm.get('countryCode')?.value);
      formData.append('phone', this.applicationForm.get('phone')?.value);
      formData.append('linkedinProfile', this.applicationForm.get('linkedinProfile')?.value);
      if (this.resumeFile) {
        formData.append('resume', this.resumeFile);
      }
      if (this.coverLetterFile) {
        formData.append('coverLetter', this.coverLetterFile);
      }

      // Send the formData to your backend
      // Example: this.http.post('your-backend-url', formData).subscribe();

      console.log('Form Submitted', formData);
    }
  }
}
