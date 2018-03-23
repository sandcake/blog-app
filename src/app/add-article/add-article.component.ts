import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  article: Article = new Article();

  @Output() onAdd = new EventEmitter<Article>();

  constructor() { }

  addClicked() {
    this.onAdd.emit(this.article);
    this.article = new Article();
  }

}
