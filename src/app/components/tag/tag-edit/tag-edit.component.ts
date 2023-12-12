import {TagsService} from "../../../services/tags.service";
import {ITag} from "../tag.model";
import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss'],
})
export class TagEditComponent implements OnInit {
  public editingTag: ITag | null | undefined;

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.editingTag$.subscribe((tag) => {
      this.editingTag = tag;
    });
  }

  saveTag(): void {
    let confirmation = confirm(`Are you sure you want to edit tag ${this.editingTag?.name}?`)
    if (this.editingTag && confirmation) {
      this.tagsService.updateTag(this.editingTag);
      this.editingTag = null;
    }
  }
}
