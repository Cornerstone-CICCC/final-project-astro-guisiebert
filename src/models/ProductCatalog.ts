import type { ProductData } from "./Product.ts"
import { Product } from "./Product.ts"
import rawProducts from "../../products.json"

export class ProductCatalog {
  private products: Product[]

  constructor() {
    this.products = (rawProducts as ProductData[]).map(
      (data) => new Product(data)
    )
  }

  // This function returns all the products
  getAllProducts(): Product[] {
    return this.products
  }

  // This function returns all the categories
  getCategories(): string[] {
    return [...new Set(this.products.map((p) => p.category))]
  }
}
