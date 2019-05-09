import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding1',
  templateUrl: './bai-tap-binding1.component.html',
  styleUrls: ['./bai-tap-binding1.component.scss']
})
export class BaiTapBinding1Component implements OnInit {
  public email: string = "";
  public fullname: string = "";
  constructor() { }

  ngOnInit() {
  }
  Submit(thamso) {
    this.fullname = thamso.value;
  }
}
