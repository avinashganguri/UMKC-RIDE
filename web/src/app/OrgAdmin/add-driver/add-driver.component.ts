import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  Firstname = '';
  Lastname = '';
  address = '';
  Number = '';
  EmailID = '';
  Password = '';
  OrganizationName = '';
  currLat = '';
  currLon = '';

  private driverDetails;
  private orgname;
  InvalidUser = false;
  constructor(private AccountService: OrganizationService) { }

  ngOnInit() {
    //this.AccountService.getAllDrivers().subscribe(res => {
      //console.log('return call from db', res);
      //this.driverDetails = res;
    //});

console.log(localStorage.getItem("orgname"));
      this.AccountService.getDrivers(localStorage.getItem("orgname")).subscribe(res=>
      {console.log(res);
        this.driverDetails = res;
      });
  }
  addDriver() {
    const accounts = {
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      EmailID: this.EmailID,
      Password: this.Password,
      Usertype: 'Driver',
      OrganizationName: localStorage.getItem("orgname"),
      currLat: this.currLat,
      currLon: this.currLon
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log('before service call: ', accounts);
    this.AccountService.createDriver(accounts).subscribe( (data) => {
      console.log("Driver Details:",accounts);
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
       this.ngOnInit();
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }

}
