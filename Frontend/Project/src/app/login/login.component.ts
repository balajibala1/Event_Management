import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../service/user-auth-service.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private userAuthService:UserAuthServiceService,private route:Router,private formBuilder:FormBuilder) { }
  user=new User();

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      userName:['',[Validators.required]],
      userPassword:['',[Validators.required,Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$')]]
  })
  }
  onSubmit(){
    this.userService.login(this.user).subscribe(
      (response:any)=>{
        console.log(response);
        this.userAuthService.setID(response.user.id);
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
         const role=response.user.role[0].roleName;
         if(role=='Admin'){
          this.route.navigate(['/admin'])
         }
         else{
          this.route.navigate(['/userhome']);
         }
      },
      (error)=>{
        console.log(error);
        alert("Please Enter valid email and Password");
      }

    );
  }

}
