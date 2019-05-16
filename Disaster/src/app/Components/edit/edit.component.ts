import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachineService } from 'src/app/Services/machine.service';
import { Machines } from 'src/app/Models/machine';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

machines:Machines[];
editForm:FormGroup;
submitted = false;

  constructor(private router:Router,private _machineservice:MachineService,private formbuilder:FormBuilder) { }

  ngOnInit() {
    let machineId = localStorage.getItem('machineId');
    if(!machineId){
      alert('something worng!');
      this.router.navigate(['']);
    }
    
    this.editForm = this.formbuilder.group({
    code: [],
    description: [],
    rent: [],
    maxHours: []
  });

  this._machineservice.getMachinesbyId(machineId).subscribe(data=>{
    console.log(data);
    this.editForm.patchValue(data); 
  });
  }
  onSubmit(){
    console.log(this.editForm);
    this._machineservice.updatemachine(this.editForm.value)
      .subscribe(data => {
        console.log(data)
        
        // this.router.navigate(['/machines']);
      });     
   
    }
}
