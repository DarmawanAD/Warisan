import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { AwalPage } from '../awal/awal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AwalPage
  tab2Root = HomePage
  tab3Root = AboutPage;

  constructor() {

  }
}
