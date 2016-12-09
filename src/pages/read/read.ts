import { Component, ViewChild } from '@angular/core';
import { NavController, App, Nav } from 'ionic-angular';
import { FeedsPage } from './../feeds/feeds';

import { RssService } from './../../providers/rss-service';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = FeedsPage;
  categories: Array<{ title: string, key: string }>;

  constructor(private navCtrl: NavController, public rssService: RssService, private app: App) {
    this.categories = [
      { title: 'Mobile Development', key: 'mobile' },
      { title: 'Web Development', key: 'web' },
      { title: 'Productivity', key: 'productivity' },
      { title: 'Dev Thoughts', key: 'dev-thoughts' }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello ReadPage Page');
  }

  public reloadFeed(cat: string) {
    this.nav.setRoot(FeedsPage, { category: cat });
  }

}
