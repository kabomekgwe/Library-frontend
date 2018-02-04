import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {

  private _url = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient ) { }

  getBooks(): Observable<any[]> {
   return this.httpClient.get<any[]>(this._url);
  }

  getBook(id) {
    return this.httpClient.get(`${this._url}/${id}`);
  }
}
