import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  id!:number;
  user_id:number;
  book=new Book();
  constructor(private bookService:BookService,private router:Router,private userAuthSerivce:UserAuthServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user_id=this.userAuthSerivce.getID();
  

  }


  deleteBook(id:number){
    this.bookService.deleteBook(this.id).subscribe(
      data=>{
        console.log("Success");
      }
    ),
    error=>{
      console.log(error);
    }
    this.router.navigate(['/user/viewevent/',this.user_id]);
    alert("Deleted");


  }
  goToBookList(){
    this.router.navigate(['/user/viewevent/',this.user_id]);
  }

}
