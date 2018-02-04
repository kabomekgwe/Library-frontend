import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm ;
  listBooks = [];
  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this.searchForm  = new FormGroup({
      searchInput: new FormControl('', { validators: Validators.required, updateOn: 'change'} )
    });

   this._booksService.getBooks().subscribe(res => this.listBooks = res);



  }

}
