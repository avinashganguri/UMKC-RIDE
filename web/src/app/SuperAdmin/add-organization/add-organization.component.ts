import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {
  name = '';
  address = '';
  Number = '';
  EmailID = '';
  Password = '';
  type = '';

  private accountDetails;
  InvalidUser = false;
  constructor(private AccountService: OrganizationService) { }

  ngOnInit() {
    this.AccountService.getAllAccounts().subscribe(res => {
      console.log('return call from db', res);
      this.accountDetails = res;
    });
  }
  addPatronUser() {
    const accounts = {
      name: this.name,
      address: this.address,
      type: this.type,
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log('before service call: ', accounts);
    this.AccountService.createAccount(accounts).subscribe( (data) => {
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        this.AccountService.getAllAccounts().subscribe(res => {
          console.log('return call from db', res);
          this.accountDetails = res;
          console.log("Account Details",this.accountDetails);
        });
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }

}
