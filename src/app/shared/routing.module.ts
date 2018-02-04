import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BookListComponent } from '../books/book-list/book-list.component';
import { BookDetailsComponent } from '../books/book-details/book-details.component';
import { BookToReturnComponent } from '../books/book-to-return/book-to-return.component';
import { ReturnBookComponent } from '../books/return-book/return-book.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: HomeComponent },
  {path: 'book',
    children: [
     { path: ':id', component: BookDetailsComponent}
    ]
  },
  {path: 'return', component: ReturnBookComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    BookListComponent,
    BookDetailsComponent,
    BookToReturnComponent,
    ReturnBookComponent,

  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
  ],

})
export class RoutingModule { }
