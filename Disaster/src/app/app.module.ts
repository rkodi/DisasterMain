import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './admin-tc/admin-tc.component';
import{TimecardService} from './timecard.service'
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminTCComponent,
    ContractorTCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TimecardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
