export interface ITag {
  id: number | null,
  name: string,
  color: string
}

export class Tag implements ITag {
  id: number | null
  name: string
  color: string

  constructor(title: string, description: string) {
    this.id = null
    this.name = title
    this.color = description
  }
}
