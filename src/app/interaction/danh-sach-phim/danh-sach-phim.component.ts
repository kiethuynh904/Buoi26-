import { Component, OnInit, ViewChildren, QueryList , ViewChild , ElementRef } from '@angular/core';
import { ItemPhimComponent } from '../item-phim/item-phim.component';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<ItemPhimComponent>;
  @ViewChild("maPhimMuonDoi") bienMaPhimMuonDoi:ElementRef;
  @ViewChild("GiaMuonDoi") bienGiaPhimMuonDoi:ElementRef;
  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "./../../../assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "./../../../assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "./../../../assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "./../../../assets/images/insideout.jpg" },
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ]
  constructor() { }

  ngOnInit() {
  }
  viewChildren() {
    let maPhim =  this.bienMaPhimMuonDoi.nativeElement.value;
    let giaPhim = this.bienGiaPhimMuonDoi.nativeElement.value;
    this.tagListItemPhim.map(item => {
      if (item.phim.maPhim == maPhim) {
        item.phim.gia = giaPhim;
      }
    })
  }
  like(movie) {
    // for (let item of this.danhSachLike) {
    //   if (movie.maPhim == item.maPhim) {
    //     item.soLike++;
    //   }
    // }
    // MAP GIONG VONG FOR
    // this.danhSachLike.map(item =>{
    //   if(item.maPhim == movie.maPhim)
    //   {
    //     item.soLike++;s
    //   }
    // })
    let phim = this.danhSachLike.find(item => item.maPhim == movie.maPhim);
    phim.soLike++;
  }
  themPhim(phim) {
    this.danhSachPhim.push(phim);
  }
}
