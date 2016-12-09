import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { FeedItem, RssService } from './../../providers/rss-service';

@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html'
})

export class FeedsPage {
  selectedCategory = '';
  articles: FeedItem[];
  loading: boolean;

  constructor(private navCtrl: NavController, private navParams: NavParams, private rssService: RssService) {
    let passedCat = navParams.get('category');
    if (passedCat !== undefined) {
      this.selectedCategory = passedCat;
    }
    this.loadArticles();
  }

  ionViewDidLoad() {
    console.log('Hello FeedsPage Page');
  }

  loadArticles() {
    this.articles = [];
    this.loading = true;
    this.rssService.getArticlesForCategory(this.selectedCategory)
      .subscribe(res => { this.articles = res; this.loading = false; });
  }

  public openArticle(url: string) {
    let browser = new InAppBrowser(url, 'blank');
    browser.show();
  }

}
