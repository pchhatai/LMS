import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './shared/services/api.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { PageHomeComponent } from "./shared/components/page-home/page-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // RouterOutlet,
    // SharedModule,
    // AuthModule,
    // UsersModule,
    // BooksModule,
    PageHomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'LMS';
  islogged: boolean = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);
    // if (status == 'loggedIn'){
    //  this.islogged = true;
    // }
    // else if (status == 'loggedOff'){
    //   this.islogged = false;
    // }
  }
}
