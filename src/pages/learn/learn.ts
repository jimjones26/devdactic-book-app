import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  learnType = 'courses';
  course1Url = 'http://courses.devdactic.com/p/ionic-by-doing';
  course2Url = 'http://courses.devdactic.com/p/ionic-2-in-one-hour';

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello LearnPage Page');
  }

  public openUrl(url: string) {
    let browser = new InAppBrowser(url, 'blank');
    //browser.show();
  }

}
