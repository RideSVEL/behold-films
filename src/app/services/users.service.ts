import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(client: HttpClient) {
    super(client);
  }

  public findAllUsers(): Observable<User[]> {
    return this.get('users');
  }

  public findAllUsersById(fromId: number): Observable<User[]> {
    return this.get('users/' + fromId);
  }
}
