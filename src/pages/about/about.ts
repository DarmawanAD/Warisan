import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	information: any[];
 
  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/pengetahuan.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 
}