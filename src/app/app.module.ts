import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './shared/routing.module';
import { BooksService } from './books/books.service';

import { DatePipe } from '@angular/common';
import { UserService } from './user/user.service';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,

  ],
  providers: [
    BooksService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
