import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './Components/admin-tc/admin-tc.component';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';
import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';
import { MachinesComponent } from './Components/machines/machines.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';
import { LoginComponent } from './Components/login/login.component';
import { SigninComponent } from './Components/login/signin/signin.component';
import { SignupComponent } from './Components/login/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [{ path: '', component: SigninComponent }]
  },
  {
    path: 'signup', component: LoginComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  { path: 'user', component: UserComponent },


  { path: 'home', component: HomeComponent },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'contractor', component: ContractorTCComponent},
  { path: 'contractor/submit', component: ContractorTcSubmitComponent },
  { path: 'admin', component: AdminTCComponent },
  { path: 'list', component: JobCodeManagementComponent },
  { path: 'list/create', component: CreateNewJobCodeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '', redirectTo: '/machines', pathMatch: 'full' },
  { path: 'machines', component: MachinesComponent },
  { path: 'machines/add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
