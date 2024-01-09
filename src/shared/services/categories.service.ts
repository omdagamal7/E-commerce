import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private _httpClient: HttpClient
  ) { }
    getCategories() : Observable<any> {
      return this._httpClient.get(`${environment.domain}/api/v1/categories`)
    }
}
