import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddOrganizationComponent } from './SuperAdmin/add-organization/add-organization.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AddOrganizationAdminComponent } from './SuperAdmin/add-organization-admin/add-organization-admin.component';
import { AddDriverComponent } from './OrgAdmin/add-driver/add-driver.component';
import { AddshuttleComponent } from './OrgAdmin/addshuttle/addshuttle.component';
import { DashboardComponent } from './OrgAdmin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddOrganizationComponent,
    NavbarComponent,
    AddOrganizationAdminComponent,
    AddDriverComponent,
    AddshuttleComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
