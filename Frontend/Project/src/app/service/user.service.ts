import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';
import { Theme } from '../model/theme';
import { User } from '../model/user';
import { UserAuthServiceService } from './user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private http:HttpClient,private userAuthService:UserAuthServiceService) { }
  public login(user:User):Observable<any>{
   return this.http.post<any>("http://localhost:8080/login",user,{headers:this.requestHeader});
  }

   

  public register(register:Register):Observable<any>{
    return this.http.post<any>("http://localhost:8080/registeruser",register,{headers:this.requestHeader});
  }
  public roleMatch(allowedRoles): boolean{
    let isMatch=false;
    const userRoles: any=this.userAuthService.getRoles();
    if(userRoles !=null && userRoles){
      for(let i=0;i< userRoles.length;i++){
        for(let j=0;i< allowedRoles.length;i++){
          if(userRoles[i].roleName === allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }else{
            return isMatch;
          }
        }
      }
    }
    return isMatch;

  }
}
