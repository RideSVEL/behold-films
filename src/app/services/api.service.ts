import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly api = environment.apiUrl;
  readonly headers = new HttpHeaders({Authorization: 'Basic '});

  readonly httpOptions = {
    headers: this.headers
  };

  constructor(protected client: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.client.get<T>(this.api + endpoint, this.httpOptions);
  }
}
