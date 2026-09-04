import { Product } from "./product.js";

export function createProduct(id, name) {
  return new Product(id, name);
}