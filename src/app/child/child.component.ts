import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	
	@Input() titleName: any;
	@Input() formDetails: any;
	@Input() parentChild: any;
 

 
  constructor() {}

  ngOnInit(): void {
  }
}
