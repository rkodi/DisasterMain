import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './admin-tc/admin-tc.component';
import{TimecardService} from './timecard.service';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';
import {MachinesComponent} from './Components/machines/machines.component';
import {MachineService} from './Services/machine.service';
import { EditComponent } from './Components/edit/edit.component';
import { AddComponent } from './Components/add/add.component' ;
import {jobsService} from './jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminTCComponent,
    ContractorTCComponent,
    ContractorTcSubmitComponent,
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
  providers: [TimecardService, MachineService,jobsService],  
  bootstrap: [AppComponent]
})
export class AppModule { }




  ],
  
