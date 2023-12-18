import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
	name = "Welcome to Angular";
	obj1 = {fname : '', lname : '', email : '', pswd : ''}
	obj2 = {fname: "", lname: '', email : '', pswd : ''}

	parentobj = {email: "krajitha@gmail.com", password: "rajithak"}
	
  constructor() {

  }

  ngOnInit(): void {
  }

  share(){
    this.obj2.fname = this.obj1.fname
    this.obj2.lname = this.obj1.lname
    this.obj2.email = this.obj1.email
    this.obj2.pswd = this.obj1.pswd
  }
  
}
