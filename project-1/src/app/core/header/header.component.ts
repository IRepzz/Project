import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoged():boolean{
    
    return this.userService.isLoged;
  }
  constructor(public userService: UserService) {

  }

  loginHandler(): void {
    this.userService.login()
  }
  logoutHandler(): void {
    this.userService.logout()
  }
}
