import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  public status: boolean = true;
  public status2:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  Hiden() {
    this.status = false;
  }
  Show(){
    this.status = true;
  }
  Toggle(){
    this.status = !this.status;
  }
  DangXuat(){
    this.status2 = false;
  }
  DangNhap(){
    this.status2= true;
  }
}
