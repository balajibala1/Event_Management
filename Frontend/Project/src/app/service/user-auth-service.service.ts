import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
 
  constructor() { }
  public setID(id:number){
    localStorage.setItem("id",JSON.stringify(id));
  }
  public getID():number{
    return JSON.parse(localStorage.getItem("id"));
  }
  public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles():[]{
    return JSON.parse(localStorage.getItem("roles"));
  }
  public setPerson(no_of_persons:number){
    localStorage.setItem("no_of_persons",JSON.stringify(no_of_persons));
  }

  public getPerson():number{
    return JSON.parse(localStorage.getItem("no_of_persons"));
  }

  public setToken(token:string){
    localStorage.setItem("jwtToken",token);
  }

  public getToken():string{
    return localStorage.getItem("jwtToken") ;
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
  public setPrice(total:number){
    localStorage.setItem("total",JSON.stringify(total));
  }
  public getPrice():number{
    return JSON.parse(localStorage.getItem("total"));
  }

}
