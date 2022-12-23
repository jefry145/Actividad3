import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tarea3Component } from './tarea3/tarea3.component';
import { PaginawebComponent } from './paginaweb/paginaweb.component';

@NgModule({
  declarations: [
    AppComponent,
    Tarea3Component,
    PaginawebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Tarea3Component,PaginawebComponent]
})
export class AppModule {}
