import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { UbdateProductsComponent } from './ubdate-products/ubdate-products.component';

@NgModule({
  declarations: [AppComponent, UbdateProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
