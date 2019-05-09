import { Component, OnInit,ViewChild } from '@angular/core';
import {DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component'
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
@ViewChild(DanhSachPhimComponent) tagDanhSachPhim:DanhSachPhimComponent;
  constructor() { }

  ngOnInit() {
  }
themPhim(maPhim,tenPhim,giaPhim,anhPhim){
  let objPhim = {
    maPhim : maPhim,
    tenPhim:tenPhim,
    gia:giaPhim,
    hinhAnh:anhPhim,
  }
  this.tagDanhSachPhim.themPhim(objPhim)
}
}
