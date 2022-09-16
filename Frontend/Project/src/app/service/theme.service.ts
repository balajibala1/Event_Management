import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  api="http://localhost:8080/admin/"
  constructor(private http:HttpClient) { }
  viewtheme():Observable<any>{
    return this.http.get<any>(this.api+"viewtheme");
  }
  addtheme(theme:Theme):Observable<any>{
    return this.http.post<any>(this.api+"savetheme",theme);
  }
 
  edittheme(id:number,theme:Theme):Observable<any>{
    return this.http.put(this.api+"edittheme/"+id,theme);
  }
 
  deleteTheme(id:number):Observable<any>{
    return this.http.delete<any>(this.api+"deletetheme/"+id)
  }
  getById(id:number):Observable<Theme>{
    return this.http.get<Theme>(this.api+"viewtheme/"+id)
  }
}
