import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {

  searchLine: string;
  users: User[] = [];

  constructor(private modalController: ModalController, private userService: UsersService) {
  }

  ngOnInit() {
  }

  async closeSearch(): Promise<void> {
    await this.modalController.dismiss();
  }

  search(searchLine: string): void {
    this.searchLine = searchLine;
    if (this.searchLine) {
      this.userService.searchUsersByLine(this.searchLine.toLowerCase()).subscribe(data => {
        this.users = data;
      });
    } else {
      this.users = [];
    }
  }
}
