import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ApiService {


  constructor(client: HttpClient) {
    super(client);
  }

  sendMessageToUser(recipientId: number, message: string) {
    return this.post('message/' + recipientId, message);
  }

  sendMessageToAllUsers(message: string) {
    return this.post('message', message);
  }
}
