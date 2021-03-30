import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {PopoverController} from '@ionic/angular';
import {UserPopoverItemComponent} from '../user-popover-item/user-popover-item.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor(private popoverController: PopoverController, private router: Router) {
  }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserPopoverItemComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  getUserLastName(): string {
    return this.user.lastName == null ? '' : this.user.lastName;
  }

  getUserColorByQuantity(): string {
    if (this.user.countOfUse < 10) {
      return 'danger';
    } else if (this.user.countOfUse >= 10 && this.user.countOfUse <= 50) {
      return 'warning';
    } else if (this.user.countOfUse > 50 && this.user.countOfUse <= 200) {
      return 'tertiary';
    } else {
      return 'success';
    }
  }


  showUserActions() {
    this.router.navigate(['console/message/sending'], { queryParams: { recipient: this.user.userId } }).then();
  }
}
