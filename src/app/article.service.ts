import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable()
export class ArticleService {

  articles: Article[] = [
    {
      ueberschrift: 'Bag',
      autor: 'Qian Le',
      datum: '11/11/2001',
      anrisstext: 'Lipinpin Lipanpan',
      artikeltext: 'Very valuable article'
    },
    {
      ueberschrift: 'Le trou barbu',
      autor: 'Nyangono du sud',
      datum: '11/01/2017',
      anrisstext: 'Je veux le trou ! C’est mon trou...',
      artikeltext: 'disque d\'or en France'
    }
  ];

  constructor() { }

  addArticle(article: Article) {
    this.articles.push(article);
  }

  getArticles(): Article[] {
    return this.articles;
  }

}
