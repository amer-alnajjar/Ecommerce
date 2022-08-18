import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  product: any = {};
  loading: boolean = false;

  constructor(private rout: ActivatedRoute, private service: ProductService) {
    this.id = this.rout.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    this.loading = true;
    this.service.getProductDetails(this.id).subscribe(
      (res: any): void => {
        this.product = res;
        this.loading = false;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
        this.loading = false;
      }
    );
  }
}
