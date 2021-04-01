import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {LoadingController} from '@ionic/angular';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  user: User = new User();
  recipient: number;
  messageText = '';

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService,
              private router: Router,
              private loadingController: LoadingController,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.presentLoading().then();
      this.recipient = params.recipient;
      if (this.recipient) {
        this.userService.findUserById(this.recipient).subscribe(data => {
          this.user = data;
        });
      } else {
        this.user = new User();
      }
    });
  }

  ionViewDidLeave() {
    this.user = new User();
    this.messageText = '';
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();
  }

  redirectToUsers() {
    this.router.navigate(['console/users']);
  }

  sendMessage() {
    this.recipient ?
      this.messageService.sendMessageToUser(this.recipient, this.messageText).subscribe(() =>
        this.redirectToUsers()) :
      this.messageService.sendMessageToAllUsers(this.messageText).subscribe(() =>
        this.redirectToUsers());
  }

  navigateBack() {
    this.router.navigate(['console/users']);
  }
}
