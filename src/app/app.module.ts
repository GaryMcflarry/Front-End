import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ClientComponent } from './components/client/client.component';
import { AddTaskComponent } from './components/add-client/add-task.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ClientComponent,
    AddTaskComponent,
    EditClientComponent,
    EditButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
