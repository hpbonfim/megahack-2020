import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export abstract class BaseService<T> {
  abstract API_URL: string;
  BASE_URL: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0'
    })
  };

  constructor(@Inject('http') public http: HttpClient) {
    this.BASE_URL = environment.apiUrl;
  }

  get = (filter?: any): Observable<any> => this.http.get<any>(this.getApiUrl() + this.serializeParams(filter), this.httpOptions);

  getById = (id: number): Observable<T> => this.http.get<T>(`${this.getApiUrl()}/${id}`, this.httpOptions);

  post = (model: T): Observable<any> => this.http.post<any>(this.getApiUrl(), model);

  delete = (id: number): Observable<any> => this.http.delete<any>(`${this.getApiUrl()}/${id}`);

  edit = (model: T): Observable<any> => this.http.put<any>(this.getApiUrl(), model);

  getApiUrl = () => `${this.BASE_URL}/${this.API_URL}`;

  private serializeParams(filter: any = {}): string {
    const quote = '?';
    const ligature = '&';
    const filterSize = Object.keys(filter).length - 1;

    if (!filterSize) { return quote; }

    return Object.keys(filter).reduce((accumulator, currentValue, index) => {
      accumulator += index === 0 ? quote : '';
      accumulator += `${currentValue}=${filter[currentValue]}`;
      accumulator += index < filterSize ? ligature : '';
      return accumulator;
    }, '');
  }
}
