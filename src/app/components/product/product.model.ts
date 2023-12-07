import {ITag} from "../tag/tag.model";

export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  img: string,
  tags: Array<ITag> | null
}

export class Product implements IProduct {
  id: number
  name: string
  description: string
  price: number
  img: string
  tags: Array<ITag> | null

  constructor(id: number, name: string, description: string, price: number, img: string, tags: Array<ITag> | null) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.img = img
    this.tags = tags
  }
}
