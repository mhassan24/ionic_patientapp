import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../model/data';
import { AngularFireDatabase } from 'angularfire2/database';
import {PatientviewPage  } from '../patientview/patientview';

/**
 * Generated class for the PatientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientdetails',
  templateUrl: 'patientdetails.html',
})
export class PatientdetailsPage {
  data = {} as Data
  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientdetailsPage');
  }

  updateinfo(data: Data) {
    this.db.list('/data/').push(data);
  }

  patientview() {
    this.navCtrl.push(PatientviewPage);
  }
}
