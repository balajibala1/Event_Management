import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './service/user.service';
import { FooterComponent } from './footer/footer.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { AddthemeComponent } from './admin/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { EditthemeComponent } from './admin/edittheme/edittheme.component';
import { BookComponent } from './user/book/book.component';
import { ViewbookeventComponent } from './user/viewbookevent/viewbookevent.component';
import { DeletebookComponent } from './user/deletebook/deletebook.component';
import { UserhomeComponent } from './userhome/userhome.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    ForbiddenComponent,
    FooterComponent,
    ViewthemeComponent,
    AddthemeComponent,
    DeletethemeComponent,
    EditthemeComponent,
    BookComponent,
    ViewbookeventComponent,
    DeletebookComponent,
    UserhomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
