import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '商品1', 199, 1, '第1个商品', [ '电子产品', '硬件产品']),
      new Product(2, '商品2', 200, 3, '第2个商品', [ '电子产品']),
      new Product(3, '商品3', 201, 2, '第3个商品', [ '硬件产品']),
      new Product(4, '商品4', 202, 4.5, '第4个商品', [ '电子产品', '硬件产品']),
      new Product(5, '商品5', 203, 3.5, '第5个商品', [  '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
      new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    ];
  }

}
export class Product  {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categoies: Array<String>) {
  }
}
