import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book   ;
  days = 0;
  date = new Date();
  k;

  constructor(private _route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    const id = this._route.snapshot.params['uuid'];

   this.booksService.getBook(id).subscribe(res => (this.book = res[0] ));
  console.log(localStorage.getItem('token'));

  }
  getBorrowDate() {
    this.date = new Date();
    this.k = this.date.setDate(this.date.getDate() + this.days);
    this.date = new Date(this.k);

  }

  borrowBook(book) {
  this.booksService.postBorrowBook(book).subscribe(res => console.log(res), (err) => console.error(err.message));
  }

}
