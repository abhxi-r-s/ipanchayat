import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserwelcomeComponent } from './userwelcome/userwelcome.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { StatusdisplayComponent } from './statusdisplay/statusdisplay.component';

const routes: Routes = [{path:"",component:FirstpageComponent},
{path:'a',component:AboutComponent},
{path:'ad',component:AdministratorComponent},
{path:'u',component:UserhomeComponent},
{path:'n',component:NotificationsComponent},
{path:'aw',component:AdminwelcomeComponent},
{path:'us',component:SignupComponent},
{path:'ud',component:UserdisplayComponent},
{path:'as',component:AdminsignupComponent},
{path:'sq',component:SendrequestComponent},
{path:'uw',component:UserwelcomeComponent},
{path:'sd',component:StatusdisplayComponent},
{path:'vr',component:ViewrequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
