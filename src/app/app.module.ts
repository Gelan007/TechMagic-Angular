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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ButtonBlueComponent } from './components/UI/buttons/button-blue/button-blue.component';
import { TagViewComponent } from './components/tag/tag-view/tag-view.component';
import { ProductMainComponent } from './components/product/product-main/product-main.component';
import { ButtonGreenComponent } from './components/UI/buttons/button-green/button-green.component';
import { ButtonRedComponent } from './components/UI/buttons/button-red/button-red.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    TagManagementComponent,
    TagListComponent,
    TagEditComponent,
    ProductCardComponent,
    ButtonBlueComponent,
    TagViewComponent,
    ProductMainComponent,
    ButtonGreenComponent,
    ButtonRedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
