import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
