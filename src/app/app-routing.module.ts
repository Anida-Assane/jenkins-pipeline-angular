import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeArticlesComponent} from "./liste-articles/liste-articles.component";
import {AppComponent} from "./app.component";
import {DetailsArticlesComponent} from "./details-articles/details-articles.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {
    path:"",
    component:ListeArticlesComponent
  },
  {
    path:"liste",
    redirectTo:""
  },
  {
    path:"details/:id",
    component: DetailsArticlesComponent
  },
  {
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
