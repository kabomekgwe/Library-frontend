import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-to-return',
  templateUrl: './book-to-return.component.html',
  styleUrls: ['./book-to-return.component.css']
})
export class BookToReturnComponent implements OnInit {

  books = [];
  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    const id = localStorage.getItem('token');
    this._booksService.getBooksToReturn(id).subscribe( (res) => {
      this.books = res;

    }, (err) => console.error(err));
  }


}
