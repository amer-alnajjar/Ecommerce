import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(environment.apiUrl + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.apiUrl + 'products/categories');
  }
  getCategoriesByFilter(key: string) {
    return this.http.get(environment.apiUrl + 'products/category/' + key);
  }
  getProductDetails(id: any) {
    return this.http.get(environment.apiUrl + 'products/' + id);
  }
}
