import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BookListPage} from "../pages/book-list/book-list";
import {CdListPage} from "../pages/cd-list/cd-list";
import {TabsPage} from "../pages/tabs/tabs";
import {BookCdService} from "../services/book-cd.service";
import {LendBookPage} from "../pages/lend-book/lend-book";
import {LendCdPage} from "../pages/lend-cd/lend-cd";
import {OptionsPage} from "../pages/options/options";
import {AuthService} from "../services/auth.service";
import {AuthPage} from "../pages/auth/auth";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    OptionsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    OptionsPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookCdService,
    AuthService
  ]
})
export class AppModule {}
