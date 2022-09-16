import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { Theme } from 'src/app/model/theme';

@Component({
  selector: 'app-edittheme',
  templateUrl: './edittheme.component.html',
  styleUrls: ['./edittheme.component.css']
})
export class EditthemeComponent implements OnInit {
  id!:number;
  theme=new Theme();
  editTheme:FormGroup;
  constructor(private themeService:ThemeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.editTheme=new FormGroup({
      'themeName':new FormControl('',[Validators.required]),
      'theme_cost':new FormControl('',[Validators.required,Validators.pattern("^0*[0-9]{4}$")]),
      'location':new FormControl('',[Validators.required]),

    })
    this.id=this.route.snapshot.params['id'];
    this.themeService.getById(this.id).subscribe(
      data=>{
        this.theme=data;
      },
     error=>{
      console.log(error);
    });
    
    
  }
  onSubmit(){
   
      this.themeService.edittheme(this.id,this.theme).subscribe(
        data=>{
          alert("Edited Successfully");
          this.router.navigate(['admin/viewtheme']);
          (error:any)=>console.log(error);
        }
      )
    }
  

  

}
