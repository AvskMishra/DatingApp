import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dating APP';
  users: any;

  constructor(private accountservice: AccountService) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountservice.setCurrentUser(user);
  }
}
