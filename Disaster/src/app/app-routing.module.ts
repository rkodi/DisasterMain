import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { JobCodeManagementComponent } from './job-code-management/job-code-management.component';
import { CreateNewJobCodeComponent } from './create-new-job-code/create-new-job-code.component';

const routes: Routes = [
  { path: 'list', component: JobCodeManagementComponent },
  { path: 'list/create', component: CreateNewJobCodeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
