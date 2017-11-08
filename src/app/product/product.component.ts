import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private key: string;
  private keyFilter: FormControl = new FormControl();
  private products: Product[];
  constructor(private  productService: ProductService) {
    this.keyFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.key = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
