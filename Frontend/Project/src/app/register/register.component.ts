import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    register=new Register();
    signForm: FormGroup;
  constructor(private userService:UserService,private router:Router,private formBuilder:FormBuilder) { }
  pattern="^((\\+91-?)|0)?[0-9]{10}$";
  ngOnInit(): void {
    this.signForm=this.formBuilder.group({
    username:['',[Validators.required]],
    mobileNo:['',[Validators.required,Validators.pattern(this.pattern)]],
    emailId:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$')]]
    })
  }
  
  onSubmit(){
    this.userService.register(this.register).subscribe(
      (response:any)=>{
        alert("Registered");
        this.router.navigate(['/login']);
      },
      error=>{
        console.log(error);
        alert("EmailId already exists!!")
      }
    );
  }

}
