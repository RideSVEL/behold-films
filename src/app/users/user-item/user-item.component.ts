import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
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


  showUserActions(user: User) {

  }
}
