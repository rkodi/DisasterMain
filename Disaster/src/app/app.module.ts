import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MachinesComponent} from './Components/machines/machines.component';
import {MachineService} from './Services/machine.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './Components/edit/edit.component';
import { AddComponent } from './Components/add/add.component' 


@NgModule({
  declarations: [
    MachinesComponent,
    AppComponent,
    EditComponent,
    AddComponent
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
