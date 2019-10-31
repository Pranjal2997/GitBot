import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';

import { Component1Service } from "./component1.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    PageNotFoundComponent,
    FavouritesComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Component1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
