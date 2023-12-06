import { Component, OnInit } from '@angular/core';
import {ITag} from "../tag.model";
import {TagsService} from "../../../services/tags.service";


@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss'],
})
export class TagEditComponent implements OnInit {
  public editingTag: ITag | null | undefined;

  constructor(private tagsService: TagsService) {}

  public ngOnInit(): void {
    this.tagsService.editingTag$.subscribe((tag) => {
      this.editingTag = tag;
    });
  }

  public saveTag(): void {
    if (this.editingTag) {
      this.tagsService.updateTag(this.editingTag);
      this.editingTag = null;
    }
  }
}
