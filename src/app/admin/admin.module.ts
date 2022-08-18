import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { SalesComponent } from './components/sales/sales.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { RouterModule } from '@angular/router';
import { UbdateProductsComponent } from './components/ubdate-products/ubdate-products.component';

@NgModule({
  declarations: [AdminComponent, SalesComponent, AddproductsComponent, UbdateProductsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule],
})
export class AdminModule {}
