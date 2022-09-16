import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api="http://localhost:8080/user/";
  constructor(private http:HttpClient) { }
  bookEvent(book:Book,id:number):Observable<Book[]>{
    return this.http.post<Book[]>(this.api+"book/"+id,book);

  }
  viewBook(id:number):Observable<Book>{
    return this.http.get<Book>(this.api+"viewbook/"+id);
  }
  deleteBook(id:number):Observable<any>{
    return this.http.delete(this.api+"deletebook/"+id)
  }
  
}
