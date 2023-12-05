import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { TagManagementComponent } from './components/tag/tag-management/tag-management.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagEditComponent } from './components/tag/tag-edit/tag-edit.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    TagManagementComponent,
    TagListComponent,
    TagEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
