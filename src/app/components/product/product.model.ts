export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  img: string
}

export class Product implements IProduct {
  id: number
  name: string
  description: string
  price: number
  img: string

  constructor(id: number, name: string, description: string, price: number, img: string) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.img = img
  }
}
