export class Product {
  constructor(id, name, price = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}