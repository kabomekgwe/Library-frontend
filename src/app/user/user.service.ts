import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private url = 'http://localhost:3000/user/register';
  constructor(private httpClient: HttpClient) { }

  registerUser(data) {
    return this.httpClient.post(this.url, data).subscribe(res => {}, (err) => ( console.log(err)));

  }
}
