import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';
@Component({
  selector: 'app-add-organization-admin',
  templateUrl: './add-organization-admin.component.html',
  styleUrls: ['./add-organization-admin.component.css']
})
export class AddOrganizationAdminComponent implements OnInit {

  Firstname = '';
  Lastname = '';
  address = '';
  Number = '';
  EmailID = '';
  Password = '';
  OrganizationName = '';
  private orgnames;
  private OrgDetails;
  InvalidUser = false;
  constructor(private AccountService: OrganizationService) { }

  ngOnInit() {
    this.AccountService.getallAdminUsers().subscribe(res => {
      console.log('return call from db', res);
      this.OrgDetails = res;
    });

    this.AccountService.getallorg().subscribe(res=>{
      console.log('organization names',res);
      this.orgnames=res;
    } )
  }
  addOrganizationAdmin() {
    const accounts = {
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      EmailID: this.EmailID,
      Password: this.Password,
      Usertype: 'OrganizationAdmin',
      OrganizationName: this.OrganizationName
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log(this.OrganizationName);
    console.log('before service call: ', accounts);
    this.AccountService.createAdminAccount(accounts).subscribe( (data) => {
      console.log("Admin Details:",accounts);
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        this.AccountService.getallAdminUsers().subscribe(res => {
          console.log('return call from db', res);
          this.OrgDetails = res;
        });
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }

}
