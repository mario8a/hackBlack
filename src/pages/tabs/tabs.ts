import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import  {HistorialPage} from "../historial/historial";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = HistorialPage;
  }




}
