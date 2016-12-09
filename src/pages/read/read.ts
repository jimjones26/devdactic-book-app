import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Read page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {

  myVar = {text: ''};

  constructor(public navCtrl: NavController) {
    this.myVar.text = 'Ionic';
  }

  ionViewDidLoad() {
    console.log('Hello ReadPage Page');
  }

  public changeText() {
    this.myVar.text = 'Simon';
  }

}
