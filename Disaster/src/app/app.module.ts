import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './admin-tc/admin-tc.component';
import{TimecardService} from './timecard.service'
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTCComponent,
    ContractorTCComponent,
    ContractorTcSubmitComponent
    JobCodeManagementComponent,
    CreateNewJobCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [TimecardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
