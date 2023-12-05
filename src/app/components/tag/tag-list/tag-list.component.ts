import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITag, Tag} from "../tag.model";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent {
  @Input() public tags: ITag[] | undefined;
  @Output() private edit: EventEmitter<ITag> = new EventEmitter<ITag>();
  @Output() private delete: EventEmitter<ITag> = new EventEmitter<ITag>();

  public editTag(tag: ITag) {
    this.edit.emit(tag);
  }

  public deleteTag(tag: ITag) {
    this.delete.emit(tag);
  }
}
