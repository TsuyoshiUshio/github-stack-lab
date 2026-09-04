import { createProduct } from "./product-service.js";

export function handleCreateProduct(id, name) {
  return createProduct(id, name);
}