import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './iproduct';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private readonly URL = 'http://127.0.0.1:8000/api/products';

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }

  addProduct(product: Partial<IProduct>): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL + '/create/', product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }
  updateProduct(product: IProduct, id: number): Observable<IProduct>{
    return this.http.put<IProduct>(this.URL + '/update/' + id, product);
  }
  getProductId(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(this.URL + '/detail/' + id);
  }
}


