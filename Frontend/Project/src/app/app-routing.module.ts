import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddthemeComponent } from './admin/addtheme/addtheme.component';
import { AdminComponent } from './admin/admin.component';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { EditthemeComponent } from './admin/edittheme/edittheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './user/book/book.component';
import { DeletebookComponent } from './user/deletebook/deletebook.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewbookeventComponent } from './user/viewbookevent/viewbookevent.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:"user",component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:"home",component:HomeComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"admin/viewtheme",component:ViewthemeComponent},
  {path:"admin/addtheme",component:AddthemeComponent},
  {path:"admin/deletetheme/:id",component:DeletethemeComponent},
  {path:"admin/edittheme/:id",component:EditthemeComponent},
  {path:"user/bookevent/:id",component:BookComponent},
  {path:"user/viewevent/:id",component:ViewbookeventComponent},
  {path:"user/deletebook/:id",component:DeletebookComponent},
  {path:"userhome",component:UserhomeComponent},
  { path: '', redirectTo: '/home' ,pathMatch:'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
