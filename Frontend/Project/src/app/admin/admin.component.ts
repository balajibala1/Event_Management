import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../service/user-auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userAuthService:UserAuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/admin/viewtheme'])
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
