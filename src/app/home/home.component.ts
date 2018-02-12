import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../books/books.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm ;
  token;
  listBooks = [];
  constructor(private _booksService: BooksService, public authService: AuthService) { }

  ngOnInit() {
    this.searchForm  = new FormGroup({
      searchInput: new FormControl('', { validators: Validators.required, updateOn: 'change'} )
    });

   this._booksService.getBooks().subscribe(res => { this.listBooks = res; });



  }

}
