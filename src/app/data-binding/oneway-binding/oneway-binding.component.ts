import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
public name:string  = "Cybersoft";
  constructor() { }

  ngOnInit() {
  }
Submit(){
  console.log(this.name);
}
}
