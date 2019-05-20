import { Component } from '@angular/core';
import { MachineService } from '../../Services/machine.service';
import { Router } from '@angular/router';
import { Machines } from 'src/app/Models/machine';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent  {
  public machines: Machines[];
  public machineid:string;
  private id: string;
  public editForm1: boolean = false;
  public editForm: FormGroup;
  public body: any;
  updated = false;
  errorMsg;
  
  constructor(private router: Router, private _machineservice: MachineService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formbuilder.group({
      code: [],
      description: [],
      rent: [],
      maxHours: []
    });
    this._machineservice.getMachines()
      .subscribe(data => this.machines = data,
        error => this.errorMsg = error);
    console.log(this.machines)
  }


  delete(id: string) {
    this.id = id;
    console.log(this.id)
    this._machineservice.deletemachine(this.id)
      .subscribe(data => {
        console.log(data),
          this.router.navigate(['/machines']);
        location.reload();
        error => this.errorMsg = error.statusText;
      });
  }


  onSubmit() {
    console.log(this.editForm.value)
    console.log(this.editForm.value._id)
    this._machineservice.editMachine(this.editForm.value, this.id)
      .subscribe(data => {
        console.log(data),
          error => this.errorMsg = error.statusText;
      });
  }


}



