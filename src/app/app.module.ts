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
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ButtonBlueComponent } from './components/UI/buttons/button-blue/button-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    TagManagementComponent,
    TagListComponent,
    TagEditComponent,
    ProductCardComponent,
    ButtonBlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
