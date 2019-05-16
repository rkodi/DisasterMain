import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../Services/machine.service';
import { Router } from '@angular/router';
import { Machines } from 'src/app/Models/machine';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  public machines: Machines[];
  private id: string;
  public editForm1: boolean = false;
  public editForm: FormGroup;
  public body: any;

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
  // addmachine(): void {
  //   this.router.navigate(['/add']);
  // }

  edit(id: string) {
    this.id = id;
    this.editForm1 = true;

  }

  delete(id: string) {
    this.id = id;
    console.log(this.id)
      this._machineservice.deletemachine(this.id)
      .subscribe(data => {
        console.log(data),
        error => this.errorMsg = error.statusText;
        // this.router.navigate(['/machines']);
      });
  }



  onSubmit() {
    console.log(this.editForm.value)
    console.log(this.editForm.value._id)
    this._machineservice.editMachine(this.editForm.value, this.id)
      .subscribe(data => {
        console.log(data),
          error => this.errorMsg = error.statusText;
        // this.router.navigate(['/machines']);
      });
  }

  userDelete() {
    this.router.navigate(['/add', this.machines])
  }

  updatemachine() {
    // localStorage.removeItem('id');
    // localStorage.setItem('id', id);
    this.router.navigate(['/'])
  }

  // deletemachine(machine: Machines) {
  //   this._machineservice.deletemachine(machine._id).subscribe(data => {
  //     console.log(data);
  //     this.addmachine();
  //   });
  // }


  //   userDelete(){
  //   this._machineservice.deletemachine(Machines.name).subscribe(data=>{
  //     console.log(data);
  //     this.addmachine();
  //   });
  // }

}
