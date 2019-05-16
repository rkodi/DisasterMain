import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MachineService } from 'src/app/Services/machine.service';
import { MachinesComponent } from '../machines/machines.component';
import { Machines } from 'src/app/Models/machine';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public machines;
  public errorMsg

  constructor(private router: Router, private route:ActivatedRoute,private _machineservice:MachineService) { }

  ngOnInit() {  }

  add(){
    this._machineservice.addmachine(this.machines)
    .subscribe(data => console.log(data), error => this.errorMsg = error);
    this.router.navigate(['']);
  }
  
  }
     


