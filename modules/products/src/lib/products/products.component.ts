import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/product-search';

@Component({
  selector: 'ecommerce-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  // constructor(private productSearchService: ProductSearchService) {}

  // ngOnInit(): void {
  //   this.products$ = this.control.valueChanges.pipe(
  //     filter(text => text?.length > 1),
  //     debounceTime(500),
  //     switchMap(text => this.productSearchService.searchByTerm(text))
  //   )
  // }

  send(value: string): void {
    console.log(value);
  }
}
