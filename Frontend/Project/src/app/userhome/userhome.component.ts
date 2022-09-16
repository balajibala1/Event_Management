import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../service/user-auth-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  user_id!:number;
  constructor(private userAuthService:UserAuthServiceService,private router:Router) { }

  ngOnInit(): void {
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
