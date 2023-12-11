export interface ITag {
  id: string | null,
  name: string,
  color: string
}

export class Tag implements ITag {
  id: string | null
  name: string
  color: string

  constructor(name: string, color: string) {
    this.id = null
    this.name = name
    this.color = color
  }
}
