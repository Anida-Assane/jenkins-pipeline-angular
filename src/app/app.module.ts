import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DetailsArticlesComponent } from './details-articles/details-articles.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeArticlesComponent,
    DetailsArticlesComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //pour rendre disponible les services au reste de l'application
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
