import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  constructor(private service: AdminService, private build: FormBuilder) {}
  cartproduct: any[] = [];
  loading: boolean = false;
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getCarts();
  }

  applyFilter() {
    let params = this.form.value;
    this.loading = true;
    this.service.getAllCart(params).subscribe(
      (res: any): void => {
        this.cartproduct = res;
        this.loading = false;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  getCarts() {
    this.loading = true;
    this.service.getAllCart().subscribe(
      (res: any): void => {
        this.cartproduct = res;
        this.loading = false;
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }

  deletecrt(id: number) {
    this.service.deletecart(id).subscribe(
      (res: any): void => {
        this.getCarts();
        alert(' done delete crt');
      },
      (err) => {
        document.write(`<h1>Error: ${err.message}</h1`);
      }
    );
  }
}
