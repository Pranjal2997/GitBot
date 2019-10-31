import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component1Component } from './component1/component1.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

const routes: Routes = [
  { path: '' , component: Component1Component},
  { path: 'repoDetails' , component: RepoDetailComponent },
  { path: 'favourites' , component: FavouritesComponent },
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
