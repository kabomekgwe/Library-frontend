import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  books = [];
  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    const id = localStorage.getItem('token');
    this._booksService.getBooksToReturn(id, 'no').subscribe( (res) => {
      this.books = res;


    }, (err) => console.error(err));
  }

  returnBook() {
    console.log('book returned');
  }
}
