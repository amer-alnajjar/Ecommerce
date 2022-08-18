import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllProductComponent, ProductDetailsComponent, ProductComponent],
  imports: [CommonModule, SharedModule,RouterModule],
  exports: [AllProductComponent, ProductDetailsComponent],
})
export class ProductsModule {}
