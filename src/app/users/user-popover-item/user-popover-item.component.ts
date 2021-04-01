import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-user-popover-item',
  templateUrl: './user-popover-item.component.html',
  styleUrls: ['./user-popover-item.component.scss'],
})
export class UserPopoverItemComponent implements OnInit {
  user: User;

  constructor(private router: Router, private popoverController: PopoverController) { }

  ngOnInit() {}

  async sendMessage() {
    await this.popoverController.dismiss();
    this.router.navigate(['console/message/sending'],
      {queryParams: {recipient: this.user.userId}}).then();
  }
}
