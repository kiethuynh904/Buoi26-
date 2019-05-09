import { Component, OnInit } from '@angular/core';
import { SourceMapSource } from 'webpack-sources';

@Component({
  selector: 'app-baitap-ngfor-ngclass',
  templateUrl: './baitap-ngfor-ngclass.component.html',
  styleUrls: ['./baitap-ngfor-ngclass.component.scss']
})
export class BaitapNgforNgclassComponent implements OnInit {
  public danhSachSanPham:any[] = [];
  constructor() { }
  LayThongTin(maSP, tenSP, Gia) {
    let SanPham = {
      ma: maSP,
      ten: tenSP,
      gia: Gia
    }
    this.danhSachSanPham.push(SanPham);
    console.log(this.danhSachSanPham);
  }
  ngOnInit() {
  }

}
