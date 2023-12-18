import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent implements OnInit {

	obj = {
      fname:'',
      lname:'',
      num:'',


      name : "K.Rajitha",
      email : "krajitha@gmail.com",
      pswd : "rajithak",


      empname:'',
      empid:'',
      empspec:'',
      empemail:'',
      emppswd:''
  }

  constructor() { 
  	

  }

  ngOnInit(): void {

  }
	myFun() {
		console.log(this.obj.fname, this.obj.lname, this.obj.num);
	}
  
	login() {
    console.log(this.obj.name, this.obj.email, this.obj.pswd);
  }
   register() {
      console.log(this.obj.empname, this.obj.empid, this.obj.empspec, this.obj.empemail, this.obj.emppswd);
   }
}
