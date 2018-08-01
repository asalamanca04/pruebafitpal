import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage:any = HomePage;
  public pages: Array<{ titulo: string, component: any, icon: string }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    window.localStorage.setItem('rutap', 'https://zeus.checklemon.com/api/test/');
    this.pages = [
      { titulo: 'Registro', component: HomePage, icon: 'add' },
      { titulo: 'usuarios', component: RegistroPage, icon: 'home' }
  ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(pagen) {
    this.nav.setRoot(pagen);
}
}

