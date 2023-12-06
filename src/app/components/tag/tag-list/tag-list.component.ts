import { Component, OnInit } from '@angular/core';
import {ITag} from "../tag.model";
import {TagsService} from "../../../services/tags.service";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  public tags$ = this.tagsService.tags$;

  constructor(private tagsService: TagsService) {}

  public ngOnInit() {
    this.tagsService.loadTags();
  }

  public editTag(tag: ITag) {
    this.tagsService.editTag(tag);
  }

  public deleteTag(tag: ITag) {
    this.tagsService.deleteTag(tag);
  }
}
