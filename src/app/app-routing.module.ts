import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'link',component:LinkComponent},
  {path:'card',component:CardComponent},
  {path:'message',component:MessageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
