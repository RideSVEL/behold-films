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

  public searchUsersByLine(line: string): Observable<User[]> {
    return this.get('users/search?searchText=' + line);
  }

  public findAllUsersById(fromId: number): Observable<User[]> {
    return this.get('users/' + fromId);
  }

  public findAllUsersPages(page: number, count: number, sort: string, direction: number): Observable<User[]> {
    return this.get('users/' + page + '/' + count + '/' + sort + '/' + direction);
  }

  public countUsers(): Observable<number> {
    return this.get('users/count');
  }

  public findUserById(id: number): Observable<User> {
    return this.get('users/' + id);
  }

}
