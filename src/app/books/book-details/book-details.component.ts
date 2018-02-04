import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private booksService: BooksService) { }
  book ;
  ngOnInit() {
    const id = this._route.snapshot.params['id'];

    this.booksService.getBook(id).subscribe(res => this.book = res);

  }

}
