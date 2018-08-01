import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule, Headers, Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { DetalleuserPage } from '../detalleuser/detalleuser';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  private usuarios: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    var miurl = window.localStorage.getItem('rutap') + 'users';
    this.http.get(miurl).map(res => res.json()).subscribe(data => this.usersOk(data),
      errors => this.usersError(errors)
    );
  }
  usersOk(data) {
    this.usuarios = data;
  }
  usersError(error) {
    console.log(error);
  }
  veruser(reguser) {
    this.navCtrl.push(DetalleuserPage, { reguser: reguser });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
