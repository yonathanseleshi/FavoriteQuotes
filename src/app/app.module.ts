import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage} from "../pages/favorites/favorites";
import {SettingsPage} from "../pages/settings/settings";
import { LibraryPage} from "../pages/library/library";
import {QuotePage} from "../pages/quote/quote";
import {QuotesPage} from "../pages/quotes/quotes";
import {TabsPage} from "../pages/tabs/tabs";

import {QuoteService} from "../services/quote.service";


@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    SettingsPage,
    QuotePage,
    QuotesPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
