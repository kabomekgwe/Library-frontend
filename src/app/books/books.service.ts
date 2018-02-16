import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
@Injectable()
export class BooksService {

  private _url =  environment.domain;
  options;
  constructor(private httpClient: HttpClient, private authService: AuthService ) { }

createAuthenticationHeaders() {
  this.authService.loadToken(); // Get token so it can be attached to headers
  // Headers configuration options
  this.options  = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.authToken
    })
  };
}

  getBooks(): Observable<any> {

   return this.httpClient.get<any[]>(`${this._url}/books`);
  }

  getBook(id): Observable<any> {
    return this.httpClient.get(`${this._url}/books/${id}`);
  }

  postBorrowBook(book) {
    const borrow = {
      userid: localStorage.getItem('token'),
      bookid: book
    };
    return this.httpClient.post(`${this._url}/borrow`, borrow);
  }

  getBooksToReturn(id, answer) {

    return this.httpClient.get<any[]>(`${this._url}/borrow/${id}/${answer}`);
  }

  updateBorrowedBooks(userid, bookid) {
    const data = {
       userid: userid,
       bookid: bookid
    };
    return this.httpClient.patch(`${this._url}/borrow`, data);
  }

  getAllBooksByUser() {
    const userid = localStorage.getItem('token');
    return this.httpClient.get<any[]>(`${this._url}/borrow/${userid}`);
  }
}
