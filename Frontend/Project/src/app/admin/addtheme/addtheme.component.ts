import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';
import { Theme } from 'src/app/model/theme';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent implements OnInit {
  theme=new Theme();
  addTheme:FormGroup;
  constructor(private themeService:ThemeService,private router:Router,private userAuthService:UserAuthServiceService) { }

  ngOnInit(): void {
    this.addTheme=new FormGroup({
      'themeName':new FormControl('',[Validators.required]),
      'theme_cost':new FormControl('',[Validators.required,Validators.pattern("^0*[0-9]{4}$")]),
      'location':new FormControl('',[Validators.required]),

    })

    }

  onSubmit(){
    this.themeService.addtheme(this.theme).subscribe(
      data=>{
        alert("Added SuccessFully");
        this.router.navigate(['/admin/viewtheme']);
        
      },
      error=>{
        console.log(error);
      }
    )
  }

}
