import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Models/UserRegister.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://localhost:7198/api/Users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
