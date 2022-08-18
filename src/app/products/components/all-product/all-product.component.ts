import { Component, OnInit } from '@angular/core';
import { product } from '../../interfase/interfase';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  products: product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartproduct: any[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getcategories();
  }

  //get all products
  getProducts(): void {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any): void => {
        this.products = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  //get all categories
  getcategories(): void {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any): void => {
        this.categories = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  //get all filtercategory

  filtercategory(event: any): void {
    this.loading = true;
    let category = event.target.value;
    if (category === 'all') {
      this.getProducts();
    } else {
      this.service.getCategoriesByFilter(category).subscribe(
        (res: any): void => {
          this.products = res;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          document.write(`<h1>Error: ${err.message}</h1`);
        }
      );
    }
  }

  //add To Cart

  addToCart(event: any): void {
    if ('cart' in localStorage) {
      this.cartproduct = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartproduct.find((item) => {
        return item.item.id === event.item.id;
      });
      if (exist) {
        alert('Product is already exists');
      } else {
        this.cartproduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartproduct));
      }
    } else {
      this.cartproduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartproduct));
    }
  }
}
