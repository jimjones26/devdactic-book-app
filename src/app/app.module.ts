import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from './../pages/contact/contact';
import { LearnPage } from './../pages/learn/learn';
import { ReadPage } from './../pages/read/read';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
