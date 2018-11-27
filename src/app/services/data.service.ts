import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IContact } from '../modals/contact';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  postMessage(data): Observable<any> {
    const contactData = new IContact(data);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.post(environment.postMessageUrl, contactData, {
      headers,
      responseType: 'text'
    });
  }
}
