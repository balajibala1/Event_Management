import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../service/user-auth-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_id!:number;
  constructor(private userAuthService:UserAuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  goToBookEvent(){
    this.user_id=this.userAuthService.getID();
    this.router.navigate(['/user/bookevent/'+this.user_id]);
  }
  goToViewBookEvent(){
    this.user_id=this.userAuthService.getID();
    this.router.navigate(['/user/viewevent/'+this.user_id]);
  

  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
    alert("LOGGED SUCCESSFULLY!!")
  }

}
