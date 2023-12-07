import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent {
  constructor(private router: Router) {}

  public navigateToTagManagement() {
    this.router.navigate(['tag-management'])
  }
}
