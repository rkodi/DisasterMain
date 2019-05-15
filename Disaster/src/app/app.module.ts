import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MachinesComponent} from './Components/machines/machines.component';
import {MachineService} from './Services/machine.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms' 


@NgModule({
  declarations: [
    MachinesComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule
  ],
  providers: [MachineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
