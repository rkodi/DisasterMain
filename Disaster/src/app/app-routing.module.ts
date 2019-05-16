import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorTCComponent } from './contractor-tc/contractor-tc.component';
import { AdminTCComponent } from './admin-tc/admin-tc.component';
import { ContractorTcSubmitComponent } from './contractor-tc-submit/contractor-tc-submit.component';

const routes: Routes = [
  {path:'', redirectTo:'/admin', pathMatch:'full'},
  {
    path: 'contractor', component: ContractorTCComponent
    //children: [{ path: 'submit', component: ContractorTcSubmitComponent }]
  },
  { path: 'contractor/submit', component: ContractorTcSubmitComponent },
  {path: 'admin', component:AdminTCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
