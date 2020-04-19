import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-addshuttle',
  templateUrl: './addshuttle.component.html',
  styleUrls: ['./addshuttle.component.css']
})
export class AddshuttleComponent implements OnInit {
  sname = '';
  location = '';
  currentlocation = '';

  private ShuttlesDetails;
  InvalidUser = false;
  constructor(private AccountService: OrganizationService) { }

  ngOnInit() {
    this.AccountService.getAllShuttles().subscribe(res => {
      console.log('return call from db', res);
      this.ShuttlesDetails = res;
    });
  }
  addShuttle() {
    const shuttles = {
      sname : this.sname,
      location : this.location,
      currentlocation : this.currentlocation
    };
    /*Checking if users exists in DB by calling LoginServices*/
    console.log('before service call: ', shuttles);
    this.AccountService.AddShuttle(shuttles).subscribe( (data) => {
      console.log("shuttles Details:",shuttles);
      // @ts-ignore
      if (data.message === 'success') {
        console.log(data);
        this.AccountService.getAllShuttles().subscribe(res => {
          console.log('return call from db', res);
          this.ShuttlesDetails = res;
        });
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });

  }
}
