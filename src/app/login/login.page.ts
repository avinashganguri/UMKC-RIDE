import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    // tslint:disable-next-line:ban-types
  emailID: String = '';
  password = '';
  Usertype = '';
    // tslint:disable-next-line:ban-types
  InvalidUser: Boolean = false;
  user: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    // if (this.usertype === 'Customer') {
     this.user = {
      EmailID: this.emailID,
      Password: this.password,
       Usertype: this.Usertype
    };
    // } else {
    //   this.user = {
    //     driverEmail: this.emailID,
    //     driverPassword: this.password,
    //     Usertype: this.usertype
    //   };
    // }
     console.log(this.user);
     this.loginService.authenticate(this.user).subscribe( data => {
         // tslint:disable-next-line:prefer-const
      let mymessage = 'Success';
      if (mymessage === 'Success') {
        this.InvalidUser = false;
        // @ts-ignore
        // localStorage.setItem('userID', data.user.userID);
        console.log('Backed Return Data', data);
        localStorage.setItem('usertype', this.user.Usertype);
          // tslint:disable-next-line:prefer-const
        let UserType = localStorage.getItem('usertype');
        console.log('Checking User Type', UserType);
        // @ts-ignore
        if (UserType === 'Driver') {
          this.router.navigate(['/ride']);
          // @ts-ignore
          localStorage.setItem('emailID', data.user[0].EmailID);
        } else {
          this.router.navigate(['/book-ride']);
          // @ts-ignore
          localStorage.setItem('emailID', data.user[0].EmailID);
        }
      } else {
        this.InvalidUser = true;
        // @ts-ignore
        console.log('Data.Message', data.message);
      }
    });
  }
}
