import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Stats} from '../model/stats';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  readonly api = environment.apiUrl;

  constructor(private client: HttpClient) { }

  public findAll(): Observable<Stats[]> {
    return this.client.get<Stats[]>(this.api + 'statistics');
  }

}
