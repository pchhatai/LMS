import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from "../../shared.module";
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'page-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {
  isloggedIn: boolean = false;
  constructor(private apiService: ApiService) {
    apiService.userStatus.subscribe({
      next: (res) => {
        if (res == 'loggedIn') {
          this.isloggedIn = true;
        } else {
          this.isloggedIn = false;
        }
      },
    });
  }
}
