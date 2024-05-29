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
          console.log(response);
        },
        error => {
          console.log('Login failed:', error);
          // Handle login error (display error message, clear form fields, etc.)
        }
      );
  }
}
