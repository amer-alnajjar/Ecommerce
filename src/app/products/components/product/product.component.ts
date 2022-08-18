import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../../interfase/interfase';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() data!: product;
  @Output() item = new EventEmitter();
  showcount: boolean = false;
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}
  add() {
    this.item.emit({ item: this.data, quantity: this.count });
    this.showcount = false;
  }
  showecount() {
    this.showcount = true;
  }
}
