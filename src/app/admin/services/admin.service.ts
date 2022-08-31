import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllCart(params?: any) {
    let param = new HttpParams();
    param.append('stsrtdate', params?.start).append('enddate', params?.end);
    return this.http.get(environment.apiUrl + 'carts', { params });
  }
  deletecart(id: number) {
    return this.http.delete(environment.apiUrl + 'carts/' + id);
  }

  creatProduct(model: any) {
    return this.http.post(environment.apiUrl + 'products', { model });
  }

  deleteProduct(id: number) {
    return this.http.delete(environment.apiUrl + 'products/' + id);
  }
}
