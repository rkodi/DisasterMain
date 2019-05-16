import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachinesComponent } from './Components/machines/machines.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  // {path:'', redirectTo: '/edit',pathMatch:'full'},
  {path:'machines', component: MachinesComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
