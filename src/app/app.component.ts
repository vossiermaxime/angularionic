import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {OptionsPage} from "../pages/options/options";

import * as firebase from "firebase";
import {AuthPage} from "../pages/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any = AuthPage;
  isAuth: boolean;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyCFFTknf3ZszpSGeqzu4mXXBSQwb0UejhM",
        authDomain: "ionic-a38ff.firebaseapp.com",
        databaseURL: "https://ionic-a38ff.firebaseio.com",
        projectId: "ionic-a38ff",
        storageBucket: "ionic-a38ff.appspot.com",
        messagingSenderId: "828281062939"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

