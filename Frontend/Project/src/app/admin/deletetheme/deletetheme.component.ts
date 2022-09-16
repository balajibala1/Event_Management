import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { Theme } from 'src/app/model/theme';

@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent implements OnInit {
  id!:number;
  theme=new Theme();
  constructor(private route:ActivatedRoute,private router:Router,private themeService:ThemeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.themeService.getById(this.id).subscribe(
      data=>{
        this.theme=data;
        (error:any)=>console.log(error)});
        
  }
  onSubmit(){
    this.themeService.deleteTheme(this.id);
    }
  deleteTheme(id: number){
    this.themeService.deleteTheme(id).subscribe( data => {
        alert("Deleted Successfully");
         this.router.navigate(['/admin/viewtheme']);
       },
       
         (error:any)=>
         {console.log(error),
          this.router.navigate(['/admin/viewtheme']);
          alert("Deleted Successfully");

        });
       }

  goToThemeList(){
    this.router.navigate(['/admin/viewtheme']);
  }

}
