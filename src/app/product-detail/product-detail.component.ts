import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productTitle;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routerInfo.snapshot.params['title'];
  }

}
