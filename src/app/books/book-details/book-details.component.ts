import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Toast } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book;
  days = 0;
  date = new Date();
  k;

  constructor(private _route: ActivatedRoute, private booksService: BooksService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    const id = this._route.snapshot.params['uuid'];
    this.booksService.getBook(id).subscribe(res => (this.book = res[0]));
  }
  getBorrowDate() {
    this.date = new Date();
    this.k = this.date.setDate(this.date.getDate() + this.days);
    this.date = new Date(this.k);

  }

  borrowBook(book) {
    this.booksService.postBorrowBook(book).subscribe(res => {
      this.toastr.success('Book, Added to list', 'Success!');
    },
      (err) => {
        if (err.status === 400) {
          this.toastr.error('You have already borrowed this book, choose another one.', 'Cannot borrow Book');
        }
      });


  }

}
