import {Component, OnInit} from '@angular/core';
import {ITag, Tag} from "../tag.model";
import {TagsService} from "../../../services/tags.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-tag-management',
  templateUrl: './tag-management.component.html',
  styleUrl: './tag-management.component.scss'
})
export class TagManagementComponent {
  constructor(private router: Router) {}

  public navigateToProductList(): void {
    this.router.navigate([''])
  }


/*  public tags!: ITag[];
  public editingTag: ITag | null = null;

  constructor(private tagService: TagsService) {}

  public ngOnInit(): void {
    this.tags = this.tagService.getTags();
  }

  public editTag(tag: ITag) {
    this.editingTag = tag;
  }

  public deleteTag(tag: ITag) {
    this.tagService.deleteTag(tag);
  }

  public saveTag(updatedTag: ITag) {
    if (this.editingTag) {
      // Редактирование существующего тега
      this.tagService.updateTag(updatedTag);
      this.editingTag = null;
    } else {
      // Создание нового тега
      this.tagService.createTag(updatedTag);
    }
  }*/
}
