import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { Theme } from 'src/app/model/theme';

@Component({
  selector: 'app-viewtheme',
  templateUrl: './viewtheme.component.html',
  styleUrls: ['./viewtheme.component.css']
})
export class ViewthemeComponent implements OnInit {
  id!:number;
  themedetails!:Theme[];
  constructor(private themeService:ThemeService,private router:Router,private route:ActivatedRoute) { }
  theme=new Theme();
  ngOnInit(): void {
    this.viewtheme();
  }
  viewtheme(){
    this.themeService.viewtheme().subscribe(
      data=>{
        this.themedetails=data;
        console.log("success");
      },
      error=>{
        console.log(error);
      }
    );
  }
  deleteTheme(id: number){
    this.router.navigate(['admin/deletetheme/',id]);
  }
  editTheme(id:number){
    this.router.navigate(['admin/edittheme',id]);
  }
  
  
  
  
 

}
