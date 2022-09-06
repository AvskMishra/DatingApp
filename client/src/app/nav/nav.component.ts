import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, err => {
      console.log(err);
    });
  }

  logout() {
    this.loggedIn = false;
    this.accountService.logout();
  }
  
  getCurrentUser() {
    ///currentUser$ is not a normal http call its of type observable so may be it never complete  and there may be tha chance of memory leak .
    ///we will try to move it to html section  with async pipe
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
}
