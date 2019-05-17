import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './admin-tc/admin-tc.component';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';
import { MachinesComponent } from './Components/machines/machines.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';


const routes: Routes = [
  {path:'', redirectTo:'/admin', pathMatch:'full'},
  {
    path: 'contractor', component: ContractorTCComponent
    //children: [{ path: 'submit', component: ContractorTcSubmitComponent }]
  },
  { path: 'contractor/submit', component: ContractorTcSubmitComponent },
  {path: 'admin', component:AdminTCComponent},
  { path: 'list', component: JobCodeManagementComponent },
  { path: 'list/create', component: CreateNewJobCodeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },  
  {path:'machines', component: MachinesComponent},
  {path:'machines/add', component: AddComponent},
  {path:'edit/:id', component: EditComponent}
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
