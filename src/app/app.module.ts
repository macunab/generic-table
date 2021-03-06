import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

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
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    TooltipModule,
    CardModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
