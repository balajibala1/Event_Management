import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserAuthServiceService } from '../service/user-auth-service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService,private userAuthService:UserAuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
    alert("LOGGED SUCCESSFULLY!!")

    }
    

}
