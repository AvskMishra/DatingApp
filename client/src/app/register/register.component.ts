import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {}

  //used for parent to cheild communication 
  //getting data from home component as [usersFromHomeComponent]="users" users belong to home component
  @Input() usersFromHomeComponent: any;

  //used to send data from child to parent component
  // here passing data from register component to home component to set registerMode value based on  cacel button click 
  @Output() cancelRegister = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.model);
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
