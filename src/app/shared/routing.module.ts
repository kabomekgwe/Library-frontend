import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BookListComponent } from '../books/book-list/book-list.component';
import { BookDetailsComponent } from '../books/book-details/book-details.component';
import { BookToReturnComponent } from '../books/book-to-return/book-to-return.component';
import { ReturnBookComponent } from '../books/return-book/return-book.component';

import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { CompareValidatorModule } from 'angular-compare-validator';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AccountComponent } from '../account/account.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: HomeComponent },
  {path: 'book',
    children: [
     { path: ':uuid', component: BookDetailsComponent}
    ]
  },
  {path: 'return', component: ReturnBookComponent},
  {path: 'user',
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot(),
    CompareValidatorModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    BookListComponent,
    BookDetailsComponent,
    BookToReturnComponent,
    ReturnBookComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CompareValidatorModule
  ],

})
export class RoutingModule { }
