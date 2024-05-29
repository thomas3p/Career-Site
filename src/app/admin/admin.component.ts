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

  login() {
    this.http.post<any>('http://localhost:3000/login', { username: this.username, password: this.password })
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          // Redirect to admin dashboard or perform any other action upon successful login
        },
        error => {
          console.log('Login failed:', error);
          // Handle login error (display error message, clear form fields, etc.)
        }
      );
  }
}
