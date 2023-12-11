import {BehaviorSubject, map} from "rxjs";
import {ITag} from "../components/tag/tag.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private _tagsSubject = new BehaviorSubject<ITag[]>([]);
  tags$ = this._tagsSubject.asObservable();
  private _editingTagSubject = new BehaviorSubject<ITag | null>(null);
  editingTag$ = this._editingTagSubject.asObservable();

  constructor() {}

  loadTags(tags: ITag[]) {
    this._tagsSubject.next(tags);
  }

  editTag(tag: ITag) {
    this._editingTagSubject.next(tag);
  }

  updateTag(updatedTag: ITag) {
    const tags = this._tagsSubject.value;
    const index = tags.findIndex((tag) => tag.name === updatedTag.name);

    if (index !== -1) {
      tags[index] = updatedTag;
      this._tagsSubject.next([...tags]);
      this._editingTagSubject.next(null);
    }
  }

  deleteTag(tag: ITag) {
    const tags = this._tagsSubject.value;
    const filteredTags = tags.filter((t) => t.name !== tag.name);
    this._tagsSubject.next(filteredTags);
  }

  public getUniqueTags(): ITag[] {
    const tags = this._tagsSubject.value;
    const uniqueTagsMap = new Map<string, ITag>();
    tags.forEach(tag => {
      uniqueTagsMap.set(tag.name, tag);
    });
    const uniqueTagsArray: ITag[] = Array.from(uniqueTagsMap.values());
    return uniqueTagsArray;
  }

}
