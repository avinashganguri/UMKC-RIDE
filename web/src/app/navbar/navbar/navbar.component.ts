import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*AppOwner ={};*/
  oid=localStorage.getItem("oid");
  AccountAdmin = {};
  constructor() { }

  ngOnInit() {
    const Usertype = localStorage.getItem('userType');
    console.log("User Type check",Usertype);
    if (Usertype === 'SuperAdmin') {
      console.log(Usertype);
      this.AccountAdmin = {
        AddOrganization : 'Add Organization',
        AddOrganizationAdmin: 'Add Organization Admin',
      }

    }
    else if(Usertype === 'OrganizationAdmin'){
      console.log("User Type inside navbar OrganizationAdmin",Usertype);
      this.AccountAdmin = {
        AddDriver : 'Add Driver',
        Dashboard : 'Dashboard',
        AddShuttles: 'Add Shuttles'
      }
    }
  }


}
