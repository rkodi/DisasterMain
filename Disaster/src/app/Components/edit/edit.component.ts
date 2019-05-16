import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachineService } from 'src/app/Services/machine.service';
import { Machines } from 'src/app/Models/machine';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
machines: Machines[];
  constructor(private router:Router,private _machineservice:MachineService) { }

  ngOnInit() {
    let machineId = localStorage.getItem('machineId');
    if(!machineId){
      alert('something worng!');
      this.router.navigate(['/add']);
    }

    this._machineservice.getMachinesbyId(machineId).subscribe(data=>{
      console.log(data);
      this.machines;
    })
  }
  
}
