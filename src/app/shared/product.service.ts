import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[ ] = [
    new Product(1, '商品1', 199, 1, '第1个商品', [ '电子产品', '硬件产品']),
    new Product(2, '商品2', 200, 3, '第2个商品', [ '电子产品']),
    new Product(3, '商品3', 201, 2, '第3个商品', [ '硬件产品']),
    new Product(4, '商品4', 202, 4.5, '第4个商品', [ '电子产品', '硬件产品']),
    new Product(5, '商品5', 203, 3.5, '第5个商品', [  '硬件产品']),
    new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
    // new Product(6, '商品6', 204, 2.5, '第6个商品', [ '电子产品', '硬件产品']),
  ];
  private comments: Comment[ ] = [
    new Comment(1, 1, '2017-02-02', '张', 3, '东西不错'),
    new Comment(2, 1, '2017-02-03', '张山', 2, '东西不错'),
    new Comment(3, 1, '2017-02-04', '山', 1, '东西不错'),
    new Comment(4, 1, '2017-02-05', '张山', 4, '东西不错'),
    new Comment(5, 1, '2017-02-06', '张', 5, '东西不错'),
    new Comment(6, 2, '2017-02-07', '张山', 0, '东西不错'),
  ];
  constructor() {
  }
  getProducts() {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find( (product ) => product.id == id);
  }
  getComment(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == id);
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
export class Comment  {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public conent: String) {
  }
}
