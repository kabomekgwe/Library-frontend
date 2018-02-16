import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BooksService } from '../books.service';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  books = [];
  ind;
  constructor(private _booksService: BooksService, public toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    const id = localStorage.getItem('token');
    this._booksService.getBooksToReturn(id, 'no').subscribe((res) => {
      this.books = res;
    }, (err) => console.error(err));
  }

  returnBook(bookid) {
    const userid = localStorage.getItem('token');

    this._booksService.updateBorrowedBooks(userid, bookid).subscribe((res) => {
      this.toastr.success('Book has  been returned', 'Success!');
      this.router.navigateByUrl('/return', { skipLocationChange: false });

      const id = localStorage.getItem('token');
      this._booksService.getBooksToReturn(id, 'no').subscribe((resp) => {
        this.books = resp;
      }, (err) => console.error(err));



    }, (err) => {

  console.error(err);
});

  }

}
