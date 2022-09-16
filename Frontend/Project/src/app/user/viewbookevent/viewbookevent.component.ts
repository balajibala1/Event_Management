import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { ThemeService } from 'src/app/service/theme.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';
import { Theme } from 'src/app/model/theme';


@Component({
  selector: 'app-viewbookevent',
  templateUrl: './viewbookevent.component.html',
  styleUrls: ['./viewbookevent.component.css']
})
export class ViewbookeventComponent implements OnInit {
  user_id:number;
  bookdetails!:any;
  book=new Book();
  no_of_persons:number;
  cost:number;
  theme=new Theme();
  themedetails!:Theme[];


  constructor(private userAuthService:UserAuthServiceService,private themeService:ThemeService,private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    
    this.user_id=this.userAuthService.getID();
    this.themeService.viewtheme().subscribe(
      data=>{
        this.themedetails=data;
      }
    )
    this.bookService.viewBook(this.user_id).subscribe(
      (response:any)=>{
        this.bookdetails=response;
        console.log("Success");
        console.log(response);
      }
    ),
    error=>{
      console.log(error);
    }
    
  }
  deleteBook(id:number){
    
    this.router.navigate(['/user/deletebook/',id]);
    
  }
 
    

  
  }


  
