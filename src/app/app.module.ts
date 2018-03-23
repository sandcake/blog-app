import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Pour pouvour utiliser les fonctionalités de formulaires pour Angular
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article.service';
import { MenuComponent } from './menu/menu.component';
import { AddArticleComponent } from './add-article/add-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MenuComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticleService], //Le service doit être enregistré dans la liste des providers
  bootstrap: [AppComponent]
})
export class AppModule { }
