import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
