import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { ThemeService } from 'src/app/service/theme.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';
import { Theme } from 'src/app/model/theme';
import { User } from 'src/app/model/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  user_id!:number;
  book=new Book();
  user = new User();
  themedetails!:Theme[];
  pattern="^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private userAuthService:UserAuthServiceService,private router:Router,private bookService:BookService,private formBuilder:FormBuilder,private themeService:ThemeService) { }
  bookForm: FormGroup;
  ngOnInit(): void {
    
   this.themeService.viewtheme().subscribe(
    data=>{
      this.themedetails=data;
      console.log("success")
    }
   ),
   error=>{
    console.log(error);
   }
    this.bookForm = this.formBuilder.group({
      
      'event_name':['',[Validators.required]],
      'no_of_persons':['',[Validators.required]],
  })

    }

  onSubmit(){
    this.user_id=this.userAuthService.getID();
    this.bookService.bookEvent(this.book,this.user_id).subscribe(
      (response:any)=>{
        alert("Booked Successfully");
        this.router.navigate(['/user/viewevent/'+this.user_id]);
        console.log(response.no_of_persons);
        console.log(response.total);
        this.userAuthService.setPerson(response.no_of_persons);
        this.userAuthService.setPrice(response.total);

      }
    ),
    error=>{
      console.log(error);
    }
  }


 

}
