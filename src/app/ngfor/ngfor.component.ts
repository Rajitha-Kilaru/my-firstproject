import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
	
	heroes = [
		    {id: 1, name:'Superman'},
		    {id: 2, name:'Batman'},
		    {id: 5, name:'BatGirl'},
		    {id: 3, name:'Robin'},
		    {id: 4, name:'Flash'}
		];

	 heroes1 = [
		    {id: 1, name:'Superman', awards: 4, movieSatuts : "pass"},
		    {id: 2, name:'Batman', awards: 7, movieSatuts : "fail"},
		    {id: 5, name:'BatGirl', awards: 9, movieSatuts : "pass"},
		    {id: 3, name:'Robin', awards: 3, movieSatuts : "fail"},
		    {id: 4, name:'Flash', awards: 1, movieSatuts : "pass"}
		];

  constructor() { }

  ngOnInit(): void {
  }

}
