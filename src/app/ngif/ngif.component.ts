import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

	title = "This is the way of Interpolation";
	name = "Interpolation";
	bname = "Angular";
	
	propertyBinding = "This is the concept of Property Binding";
	
	imgSrc = "https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60";
	
	ngDir = "It is an ngIf Directive";

	data1 = {
		dataType : "Array",
		concept : "Encapsulation",
		type : "environments"
	}


	data2 = {
		 name : "rajitha" ,
		email : "krajitha061@gmail.com",
		course : "CSE",
		mobileno : 9123456789
	}

	data3 = {
		file1 : "htmlFile",
		file2 : "cssFile",
		file3 : "tsFile",
		file4 : "spectFile",
		file5 : "nodeFile",

	}

	condition = "true";
		
	 myfun(val:any) {
	 	alert(val);
		 
		}
		
	
	
	

  constructor() { }

  ngOnInit(): void {
  }
	 

}
