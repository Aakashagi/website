import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { MatIconModule } from '@angular/material/icon';
import { ExampleComponent } from './example/example.component';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NextDirective } from './card/next.directive';
import { PrevDirective } from './card/prev.directive';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    NavbarComponent,
    MessageComponent,
    ExampleComponent,
    LoginComponent,
    HomeComponent,
    CardComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
