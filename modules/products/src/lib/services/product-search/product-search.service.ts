import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductSearch } from '../../models/product-search';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string) {
    return this.http.get<ProductSearch>(`https://swapi.dev/api/people/?search=${term}`).pipe(
      map(search => search.results)
    );
  }
}
