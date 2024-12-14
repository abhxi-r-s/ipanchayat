import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AboutComponent } from './about/about.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { UserwelcomeComponent } from './userwelcome/userwelcome.component';
import { StatusdisplayComponent } from './statusdisplay/statusdisplay.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    AdministratorComponent,
    SignupComponent,
    UserhomeComponent,
    AboutComponent,
    AdminwelcomeComponent,
    NotificationsComponent,
    UserdisplayComponent,
    AdminsignupComponent,
    SendrequestComponent,
    UserwelcomeComponent,
    StatusdisplayComponent,
    ViewrequestComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
