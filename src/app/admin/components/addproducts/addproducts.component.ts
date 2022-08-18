import { Component, OnInit } from '@angular/core';
import { product } from '../../../products/interfase/interfase';
import { ProductService } from '../../../products/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  constructor(
    private service: ProductService,
    private build: FormBuilder,
    private services: AdminService
  ) {}
  product: product[] = [];
  categories: string[] = [];
  base64: any = '';
  form!: FormGroup;
  loading = false;
  showeform: boolean = false;

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    this.getallproduct();
    this.getcategories();
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

  //get all categories
  getcategories(): void {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  //get all filtercategory

  filtercategory(event: any): void {
    this.form.get('category')?.setValue(event.target.value);
  }

  getImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue('this.base64');
    };
  }

  showAddFoerm() {
    this.showeform = true;
    this.getcategories();
  }
  addproduct() {
    let model = this.form.value;
    this.services.creatProduct(model).subscribe((res: any) => {
      alert(' Done Add Product successfully');
    });
  }
}
