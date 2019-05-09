import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ng-if',
  templateUrl: './baitap-ng-if.component.html',
  styleUrls: ['./baitap-ng-if.component.scss']
})
export class BaitapNgIfComponent implements OnInit {
public name:string = "";
public pass:string = "";
public status:boolean = true;
  constructor() { }

  KiemTra(){
    if(this.name == "cybersoft"&& this.pass =="cybersoft")
    {
      this.status = false;
      let objUser = {
        name: this.name,
        pass: this.pass
      }
      localStorage.setItem("user",JSON.stringify(objUser));
    }  
  }
  DangXuat(){
    this.status = true;
  }
  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user != null)
    {
      this.name = user.name;
      this.status= false;
    }
  }

}
