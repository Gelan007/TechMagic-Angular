import { Injectable } from '@angular/core';
import {ITag, Tag} from "../components/tag/tag.model";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private tags: ITag[] = [{id: 1, name: 'laptops', color: 'blue'},{id: 1, name: 'iphone', color: 'red'}, ];

  public getTags(): ITag[] {
    return this.tags;
  }

  public createTag(tag: ITag) {
    this.tags.push(tag);
  }

  public updateTag(updatedTag: ITag) {
    const index: number = this.tags.findIndex((tag) => tag === updatedTag);
    if (index !== -1) {
      this.tags[index] = updatedTag;
    }
  }

  public deleteTag(tag: ITag) {
    this.tags = this.tags.filter((t) => t !== tag);
  }
}
