import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}

 //currentUser$!: Observable<User>;

  //currentUser$:Observable<User>;
  
 // loggedIn: boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
   // this.currentUser$=this.accountService.currentUser$;
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
     // this.loggedIn = true;
    }, err => {
      console.log(err);
    });
  }

  logout() {
   // this.loggedIn = false;
    this.accountService.logout();
  }

  // getCurrentUser() {
  //   ///currentUser$ is not a normal http call its of type observable so may be it never complete  and there may be tha chance of memory leak .
  //   ///we will try to move it to html section  with async pipe
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
