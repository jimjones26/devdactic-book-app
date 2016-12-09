import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html'
})

export class FeedsPage {
  selectedCategory = 'default';

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    let passedCat = navParams.get('category');
    if (passedCat !== undefined) {
      this.selectedCategory = passedCat;
    }
  }

  ionViewDidLoad() {
    console.log('Hello FeedsPage Page');
  }

}
