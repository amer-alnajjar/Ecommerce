import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  showeSales: boolean = false;
  showeProducts: boolean = false;
  ubdateProducts: boolean = false;
  deleteproduct: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showesales() {
    this.showeSales = true;
    this.showeProducts = false;
    this.ubdateProducts = false;
    this.deleteproduct = false;
  }
  showeproducts() {
    this.showeProducts = true;
    this.showeSales = false;
    this.ubdateProducts = false;
    this.deleteproduct = false;
  }
  showeubdateproducts() {
    this.ubdateProducts = true;
    this.showeSales = false;
    this.showeProducts = false;
    this.deleteproduct = false;
  }
  deleteProduct() {
    this.deleteproduct = true;
    this.ubdateProducts = false;
    this.showeSales = false;
    this.showeProducts = false;
  }
}
