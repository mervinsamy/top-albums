import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AlbumsListComponent } from './albums-list/albums-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AlbumsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
