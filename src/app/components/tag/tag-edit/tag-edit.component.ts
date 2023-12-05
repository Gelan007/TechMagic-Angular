import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITag, Tag} from "../tag.model";

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrl: './tag-edit.component.scss'
})
export class TagEditComponent {
  @Input() public tag!: ITag;
  @Output() private save: EventEmitter<ITag> = new EventEmitter<ITag>();

  public saveTag() {
    this.save.emit(this.tag);
  }
}
