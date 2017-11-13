import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../shared/product.service';
import {Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private comments: Comment[];
  private newRating = 5;
  private newComment = '';
  private tempComment: Comment;
  private pullStarShow = false;
  constructor(private routerInfo: ActivatedRoute, private  productService: ProductService) { }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getComment(productId);
  }

  pullStar() {
    this.tempComment =
      new Comment( this.comments.length + 1, this.product.id , new Date().toDateString(), '张', this.newRating, this.newComment);
    this.comments.push(this.tempComment);
    const sum = this.comments.reduce(( sum, comment) => sum + comment.rating , 0 );
    this.product.rating = sum / this.comments.length;
    this.tempComment = null;
    this.newRating = 5;
    this.newComment = '';
    this.pullStarShow = false;
  }
}
