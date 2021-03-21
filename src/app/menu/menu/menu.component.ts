import {Component, OnInit, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @ViewChild('navigation', {static: true}) ionNav: IonNav;

  constructor() {}

  ngOnInit() {
    this.ionNav.setRoot(ListComponent).then();
  }

}
