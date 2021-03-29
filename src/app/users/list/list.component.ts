import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../model/user';
import {ModalController, PickerController} from '@ionic/angular';
import {UserSearchComponent} from '../user-search/user-search.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(public userService: UsersService, private picker: PickerController,
              private modal: ModalController) {
  }

  disableLoadData = false;

  users: User[] = [];
  direction = 0;
  sortBy = 'id';
  countUsers = 0;

  readonly fields = new Map([
    ['Standard', 'id'],
    ['Firstname', 'firstName'],
    ['Count of using', 'countOfUse'],
    ['Lastname', 'lastName'],
    ['Username', 'userName'],
  ]);

  readonly dir = new Map([
    ['Ascending', 0],
    ['Descending', 1]
  ]);

  ngOnInit() {
    this.getAdditionalUsersToArray();
  }

  ionViewWillEnter() {
    this.updateCounter();
  }

  updateCounter() {
    this.userService.countUsers().subscribe(data => this.countUsers = data);
  }

  getAdditionalUsersToArray(count: number = 10): void {
    this.userService.findAllUsersPages(this.users.length / 10, count, this.sortBy, this.direction)
      .subscribe(data => {
        this.users = this.users.concat(data);
        this.disableLoadData = data.length % 10 !== 0 || data.length === 0;
      });
  }

  loadData($event: any) {
    setTimeout(() => {
      this.getAdditionalUsersToArray();
      $event.target.complete();
    }, 600);
  }

  doRefresh($event: any) {
    this.refreshUsers();
    setTimeout(() => {
      $event.target.complete();
    }, 600);
  }

  private refreshUsers(): void {
    this.updateCounter();
    this.users = [];
    this.getAdditionalUsersToArray();
  }

  async showOptions() {
    const pickerElement = await this.picker.create({
      columns: this.getColumns(),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            if (this.sortBy !== value.col1.value || this.direction !== value.col2.value) {
              this.sortBy = value.col1.value;
              this.direction = value.col2.value;
              this.refreshUsers();
            }
          }
        }
      ]
    });
    await pickerElement.present();
  }

  private getColumns() {
    return [{
      name: `col1`,
      options: this.getColumnOptions()
    }, {
      name: `col2`,
      options: this.getColumnOptions(1)
    }];
  }

  private getColumnOptions(col = 0) {
    const keys = col === 0 ? this.fields.keys() : this.dir.keys();
    const map = col === 0 ? this.fields : this.dir;
    const options = [];
    for (const temp of keys) {
      options.push({
        text: temp,
        value: map.get(temp)
      });
    }
    return options;
  }

  async showSearch() {
    const modal = await this.modal.create({
      component: UserSearchComponent
    });
    return modal.present();
  }
}
