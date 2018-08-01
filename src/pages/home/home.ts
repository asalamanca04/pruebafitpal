import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpModule, Headers, Http } from '@angular/http';
import { RegistroPage } from '../registro/registro';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private depart: Array<any>;
  private ciudad: Array<any>;
  nombre: string;
  apellidos: string;
  email: string;
  documento: string;
  ndocumento: string;
  depa: number;
  ciud: string;
  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
    var miurl = window.localStorage.getItem('rutap') + 'departments';
    this.http.get(miurl).map(res => res.json()).subscribe(data => this.departamentoOk(data),
      errors => this.departamentoError(errors)
    );
  }
  departamentoOk(data) {
    this.depart = data;
  }
  departamentoError(error) {
    console.log(error);
  }
  carciudad() {
    var urlenv = window.localStorage.getItem('rutap') + 'cities?department=' + this.depa;
    console.log("ruta " + urlenv);
    this.http.get(urlenv).map(res => res.json()).subscribe(data => this.ciudadOk(data),
      errors => this.ciudadError(errors)
    );
  }
  ciudadOk(data) {
    this.ciudad = data;
    console.log(this.ciudad);
  }
  ciudadError(error) {
    console.log(error);
  }
  guser() {
      let clientdata = new FormData();
      clientdata.append("name", this.nombre);
      clientdata.append("last_name", this.apellidos);
      clientdata.append("email", this.email);
      clientdata.append("doc_type", this.documento);
      clientdata.append("doc_number", this.ndocumento);
      clientdata.append("city_id", this.ciud);
      var urlenv = window.localStorage.getItem('rutap') + 'users';
      this.http.post(urlenv, clientdata).toPromise().then(data => {
        this.guserOk(data);
      }).catch(error => {
        console.log("error " + error.status);
      });  
  }
  guserOk(data) {
    this.showAlert("Fitpla", "Usuario Guardado");
    this.navCtrl.push(RegistroPage);
  }
  showAlert(title, texto) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: texto,
      buttons: ['Aceptar']
    });
    alert.present();
  }
}
