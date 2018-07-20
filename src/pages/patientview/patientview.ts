import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {PatientdetailsPage  } from '../patientdetails/patientdetails';

/**
 * Generated class for the PatientviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientview',
  templateUrl: 'patientview.html',
})
export class PatientviewPage {

  array = []
  valuekey = []

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFireDatabase) {
    this.patientlist();
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientviewPage');
  }
  
  initializeItems() {
    return this.db.list('/data/').snapshotChanges(['child_added'])
  }

  patientlist() {
    this.db.list('/data/').snapshotChanges(['child_added']).subscribe(data => {
      this.array.length = 0;
      this.array = []
      this.valuekey = []
      data.forEach(value => {
        this.array.push(value.payload.val())
        this.valuekey.push(value.key);
      })
    })
  }

  getItems(ev:any) {
    this.initializeItems().subscribe(val => {
      this.array = [];
      val.forEach(value => {
        this.array.push(value.payload.val())
        var val = ev.target.value;
        if(val && val.trim() != '') {
          this.array = this.array.filter((data)=> {
            return(data.patientname.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      })
    })
  }

  delete(i, index) {
    const key = this.valuekey[i]
    this.db.list('/data/' + key).remove();
    this.array.splice(index, 1)
  }

  // back() {
  //   this.navCtrl.push(PatientdetailsPage);
  // }

}
