import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
    
  }
  loginstatus=false;
  token = ''
  
  getstatus(){
    return this.loginstatus
  }
  
  login(username:string,password:string) {
    let body={username:username,
      password:password
    }
    
    this.http.post('http://localhost:3000/login', body)
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
}
