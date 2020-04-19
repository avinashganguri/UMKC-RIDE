import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = 'http://localhost:3000/signup/signinDetails';
  url = 'http://localhost:3000/signup/CheckOrgaAdmin';
  constructor(private http: HttpClient) { }

  authenticate(user) {
    console.log('Inside Service call', user);
    return this.http.post(`${this.uri}`, user);
  }
  authenticateAdmin(user) {
    console.log('Inside Admin Service call', user);
    return this.http.post(`${this.url}`, user);
  }

}
