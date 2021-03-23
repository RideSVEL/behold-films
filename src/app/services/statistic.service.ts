import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stats} from '../model/stats';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticService extends ApiService {

  constructor(protected client: HttpClient) {
    super(client);
  }

  public findAllCommands(): Observable<Stats[]> {
    return this.get('statistics');
  }

}
