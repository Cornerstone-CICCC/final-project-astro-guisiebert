export interface ProductData {
  id: number
  title: string
  slug: string
  price: number
  category: string
  image: string
  description: string
  inStock: boolean
}

export class Product {
  readonly id: number
  readonly title: string
  readonly slug: string
  readonly price: number
  readonly category: string
  readonly image: string
  readonly description: string
  readonly inStock: boolean

  constructor(data: ProductData) {
    this.id = data.id
    this.title = data.title
    this.slug = data.slug
    this.price = data.price
    this.category = data.category
    this.image = data.image
    this.description = data.description
    this.inStock = data.inStock
  }

  // This function formats the price to USD
  getFormattedPrice(): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.price)
  }

  // This function returns the slug of the product
  getSlug(): string {
    return this.slug
  }

  // This function checks if the product is in stock
  isInStock(): boolean {
    return this.inStock
  }
}
