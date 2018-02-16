import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  books = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getAllBooksByUser().subscribe( (res) => this.books = res);
  }

}
