import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private service: CartService) {}
  cartproduct: any[] = [];
  total: any = 0;
  done: boolean = false;
  ngOnInit(): void {
    this.getcart();
  }

  getcart() {
    if ('cart' in localStorage) {
      this.cartproduct = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }
  plusCount(index: number) {
    this.cartproduct[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
    this.getCartTotal();
  }
  minsCount(index: number) {
    this.cartproduct[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
    this.getCartTotal();
  }
  detdctvalue() {
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
  }
  deleteitem(index: number) {
    this.cartproduct.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
    this.getCartTotal();
  }
  deleteALLitem() {
    this.cartproduct = [];
    localStorage.setItem('cart', JSON.stringify(this.cartproduct));
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let key in this.cartproduct) {
      this.total +=
        this.cartproduct[key].item.price * this.cartproduct[key].quantity;
    }
  }

  addOrdre() {
    let product = this.cartproduct.map((item) => {
      return {
        productId: item.item.id,
        quantity: item.quantity,
      };
    });

    let Modele = {
      userId: 5,
      date: new Date(),
      products: product,
    };

    this.service.addNewOrder(Modele).subscribe(
      (res: any): void => {
        this.done = true;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
    console.log(Modele);
  }
}
