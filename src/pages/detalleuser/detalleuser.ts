import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Headers, Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DetalleuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleuser',
  templateUrl: 'detalleuser.html',
})
export class DetalleuserPage {
  public reguser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.reguser = this.navParams.get("reguser");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleuserPage');
  }

}
