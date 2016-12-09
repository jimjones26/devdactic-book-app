import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IntroPage Page');
  }

  public closeIntro() {
    this.navCtrl.setRoot(TabsPage);
  }

}
