import { Component, Input } from '@angular/core';

import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  /**
   * Definieren sie dazu ein Input vom Type Article
   * für die Artikel-Komponenten
   */
  @Input() article: Article;

  constructor() {}

  ngOnInit() {
  }

}
