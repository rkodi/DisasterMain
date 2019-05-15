import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../Services/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  public machines=[];
  errorMsg;

  constructor(private router: Router,private _machineservice:MachineService) { }

  ngOnInit() {
    this._machineservice.getMachines()
    .subscribe(data => this.machines=data,
      error=>this.errorMsg=error);
      console.log(this._machineservice)

  }
  userEdit(){    
    this.router.navigate(['/edit'])
  }

  
}
