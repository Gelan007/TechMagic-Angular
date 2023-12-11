import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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
}
