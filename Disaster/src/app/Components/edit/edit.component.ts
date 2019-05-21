import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MachineService } from 'src/app/Services/machine.service';
import { Machines } from 'src/app/Models/machine';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements  OnInit {
  public body:string
  machines: Machines;
  public updatedmachines: Machines
  updated=false;
  submitted = false;
  errorMsg;
  public editForm1: boolean = false;
  public editForm: FormGroup;
  // public body: any;
  private id: any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _machineservice: MachineService, private formbuilder: FormBuilder) {
    // this.route.paramMap.subscribe((params:ParamMap)=>{let id =params.get('body');
    // this.body=id; 
    // })
    // this._machineservice.getMachinesbyId(this.body)
    // .subscribe(data=>{
    //   let machines= data;
    //   this.machines=machines;
    // })
   }

  ngOnInit() {
    // let id = localStorage.getItem('id')
    this.editForm = this.formbuilder.group({
      code: [],
      description: [],
      rent: [],
      maxHours: []
    });
this.route.paramMap.subscribe((params:ParamMap)=>{this.id =params.get('id');
    console.log(this.id)  })
    this._machineservice.getMachinesbyId(this.id)
    .subscribe(data=>{
      let machines= data;
      this.machines=machines;
  
    })

    // this._machineservice.getMachinesbyId(this.id)
    //   .subscribe(data => {
    //     console.log(data),
    //     this.editForm.patchValue(data);
    //     error => this.errorMsg = error.statusText;
    //   })
  }

  edit(editForm) {
    this.submitted = true;
    // let machines=this.machines
    console.log(this.editForm);
    this.updated=true;
    this._machineservice.editMachine(this.editForm.value,this.id)
    .subscribe(data=>{
      console.log(data),
      error => this.errorMsg = error.statusText;
      this.router.navigate(['/machines']);

    });
     
    }

  
  }
 
 
