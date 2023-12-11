import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {ProductDetailComponent} from "./components/product/product-detail/product-detail.component";
import {ProductMainComponent} from "./components/product/product-main/product-main.component";
import {TagManagementComponent} from "./components/tag/tag-management/tag-management.component";

const routes: Routes = [
  {path: '', component: ProductMainComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'tag-management', component: TagManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
