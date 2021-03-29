import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  user: User = new User();
  recipient: number;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit() {
    console.log('logs');
    this.activatedRoute.queryParams.subscribe((params) => {
      this.recipient = params.recipient;
      if (this.recipient) {
        this.userService.findUserById(this.recipient).subscribe(data => {
          this.user = data;
        });
      }
    });
  }

}
