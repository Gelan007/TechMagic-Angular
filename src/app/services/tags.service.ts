import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {ITag} from "../components/tag/tag.model";

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private _tagsSubject = new BehaviorSubject<ITag[]>([]);
  tags$ = this._tagsSubject.asObservable();
  private _editingTagSubject = new BehaviorSubject<ITag | null>(null);
  editingTag$ = this._editingTagSubject.asObservable();

  loadTags() {
    // Simulate loading tags from a server
    const tags: ITag[] = [
      { id: 1, name: 'laptops', color: 'blue' },
      { id: 2, name: 'iphone', color: 'red' },
    ];
    this._tagsSubject.next(tags);
  }

  editTag(tag: ITag) {
    this._editingTagSubject.next(tag);
  }

  updateTag(updatedTag: ITag) {
    const tags = this._tagsSubject.value;
    const index = tags.findIndex((tag) => tag.id === updatedTag.id);

    if (index !== -1) {
      tags[index] = updatedTag;
      this._tagsSubject.next([...tags]);
      this._editingTagSubject.next(null);
    }
  }

  deleteTag(tag: ITag) {
    const tags = this._tagsSubject.value;
    const filteredTags = tags.filter((t) => t.id !== tag.id);
    this._tagsSubject.next(filteredTags);
  }
}
