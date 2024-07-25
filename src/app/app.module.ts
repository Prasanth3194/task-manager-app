import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from 'src/about/about.module';
import { AddTaskDialogModule } from 'src/dialog/add-task-dialog/add-task-dialog.module';
import { TaskListManagementModule } from 'src/task-list-management/task-list-management.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    AppRoutingModule,
    AboutModule,
    AddTaskDialogModule,  
    TaskListManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
