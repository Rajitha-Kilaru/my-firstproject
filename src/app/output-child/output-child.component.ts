import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {

	@Output() childData = new EventEmitter();
	@Output() fieldData = new EventEmitter();

		fdobj = {
			fname:'',
			id:'',
			email:'',
			pswd:''
		}
	 
  constructor() { 
  	
  }

  ngOnInit(): void {
  }
  myChildFunc() {
  this.childData.emit({firstName:'helo',lastName:'data', mobileno: 9123456789, email:'krajitha@gmail.com',password: 'rajithak'})
  }


  withFields() {
      
      this.fieldData.emit(this.fdobj)
  }

}
