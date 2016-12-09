import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssService {

  constructor(public http: Http) {
    console.log('Hello RssService Provider');
  }

  getSomeText(): string {
    return 'This is some text from my service!';
  }

}
