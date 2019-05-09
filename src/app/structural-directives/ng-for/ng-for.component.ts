import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  public DSNV:any= [{
    ten:"abc",
    tuoi:"20"
  },
  {
    ten:"xyz",
    tuoi:"11"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
