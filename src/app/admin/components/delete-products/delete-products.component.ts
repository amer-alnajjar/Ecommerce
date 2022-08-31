import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/products/interfase/interfase';
import { ProductService } from 'src/app/products/services/product.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css'],
})
export class DeleteProductsComponent implements OnInit {
  product: product[] = [];
  loading = false;

  constructor(
    private service: ProductService,
    private services: AdminService
  ) {}

  ngOnInit(): void {
    this.getallproduct();
  }
  getallproduct() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any): void => {
        this.product = res;
        this.loading = false;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  deleteprudcts(id: number) {
    this.services.deleteProduct(id).subscribe(
      (res: any): void => {
        this, this.getallproduct();
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }
}
