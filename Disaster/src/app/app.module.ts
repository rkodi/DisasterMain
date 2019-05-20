import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './Components/admin-tc/admin-tc.component';
import { TimecardService } from './timecard.service';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';
import { MachinesComponent } from './Components/machines/machines.component';
import { MachineService } from './Services/machine.service';
import { EditComponent } from './Components/edit/edit.component';
import { AddComponent } from './Components/add/add.component';
import { jobsService } from './jobs.service'
import { LoginComponent } from './Components/login/login.component'
import { LoginService } from './Services/login.service';
import { SigninComponent } from './Components/login/signin/signin.component';
import { SignupComponent } from './Components/login/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupService } from './Services/signup.service';
import { UserService } from './Services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserComponent } from './Components/user/user.component';

// import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,MatFormField } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdminTCComponent,
    ContractorTCComponent,
    ContractorTcSubmitComponent,
    JobCodeManagementComponent,
    CreateNewJobCodeComponent,
    MachinesComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatFormField
  ],
  // exports: [
  //   MatMenuModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatCardModule,
  //   MatFormField
  // ],
  

  providers: [TimecardService, MachineService, jobsService, LoginService, SignupService, UserService],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }