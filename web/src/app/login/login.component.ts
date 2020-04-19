import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmailID = '';
  Password = '';
  InvalidUser = false;
  UserType = '';

  constructor(private loginService: LoginService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

  userLogin() {
    const user = {
      EmailID: this.EmailID,
      Password: this.Password,
      UserType: this.UserType
    };
    console.log('before login service call', user.UserType);
    /*Checking if users exists in DB by calling LoginServices*/
    if (user.UserType == 'SuperAdmin') {
      localStorage.setItem('userType', user.UserType);
      this.loginService.authenticate(user).subscribe( (data) => {
        /*Receives success message if user exists and with correct credentails*/
        const mymessage = 'Success';
        console.log("Response data",data);
        if (data["message"] === 'Success') {
          this.router.navigateByUrl('/addorganization');
        } else {
          // @ts-ignore
          console.log(data.message);
          this.InvalidUser = true;
        }

      });
    }
    else {
      console.log('Else Condition Organization Admin',user);
      localStorage.setItem('userType', user.UserType);

      this.loginService.authenticateAdmin(user).subscribe( (data) => {
        /*Receives success message if user exists and with correct credentails*/
        // @ts-ignore
        const mymessage = 'Success';
        console.log("Response data",data);
        if (data["message"] === 'Success') {
          localStorage.setItem('oid',data["oid"]);
          localStorage.setItem('orgname',data["OrgName"]);
          this.router.navigateByUrl('/adddrivercomponent/'+data["oid"]);
        } else {
          console.log(data["message"]);
          this.InvalidUser = true;
        }

      });
    }
  }
}
