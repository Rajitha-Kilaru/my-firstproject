import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentObjData = {
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    pswd: ''
  }
  parentData(e:any){
    this.parentObjData.fname = e.firstName;
    this.parentObjData.lname = e.lastName;
    this.parentObjData.mobile = e.mobileno;
    this.parentObjData.email = e.email;
    this.parentObjData.pswd = e.password;
  }

  myFieldObjData = {
    feiname:'',
    feiid:'',
    feiemail:'',
    feipswd:''
  }

  items:any =[]; 

  myFieldData(e:any) {

  this.myFieldObjData.feiname=e.fname;
  this.myFieldObjData.feiid=e.id;
  this.myFieldObjData.feiemail=e.email;
  this.myFieldObjData.feipswd=e.pswd;
  
  this.items.push(e);
  console.log(this.items);
  }
}
