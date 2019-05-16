import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCodeManagementComponent,
    CreateNewJobCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
