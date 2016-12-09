import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RssService } from './../providers/rss-service';

import { ContactPage } from './../pages/contact/contact';
import { LearnPage } from './../pages/learn/learn';
import { ReadPage } from './../pages/read/read';
import { TabsPage } from './../pages/tabs/tabs';
import { FeedsPage } from './../pages/feeds/feeds';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage,
    FeedsPage
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
    ContactPage,
    FeedsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssService
    ]
})
export class AppModule {}
