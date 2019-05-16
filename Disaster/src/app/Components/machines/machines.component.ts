import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../Services/machine.service';
import { Router } from '@angular/router';
import { Machines } from 'src/app/Models/machine';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  public machines: Machines[];
  errorMsg;

  constructor(private router: Router, private _machineservice: MachineService) { }

  ngOnInit() {
    this._machineservice.getMachines()
      .subscribe(data => this.machines = data,
        error => this.errorMsg = error);
    console.log(this.machines)
  }
  addmachine(): void {
    this.router.navigate(['/add']);
  }

  // userEdit() {
  //   this.router.navigate(['/add', this.machines])
  // }

  updatemachine(machine:Machines){
localStorage.removeItem('machineId');
localStorage.setItem('machineId',machine._id);
this.router.navigate(['/add'])
  }

  deletemachine(machine: Machines) {
    this._machineservice.deletemachine(machine._id).subscribe(data => {
      console.log(data);
      this.addmachine();
    });
  }

  // userDelete(){    
  //   this.router.navigate(['/add',this.machines])
  // }

  //   userDelete(){
  //   this._machineservice.deletemachine(Machines.name).subscribe(data=>{
  //     console.log(data);
  //     this.addmachine();
  //   });
  // }

}
