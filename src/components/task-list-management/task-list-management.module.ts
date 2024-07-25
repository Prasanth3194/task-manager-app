import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListManagementRoutingModule } from './task-list-management-routing.module';
import { TaskListManagementComponent } from './task-list-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskDialogModule } from 'src/dialog/task-dialog/task-dialog.module';
import { ConfirmDialogModule } from 'src/dialog/confirm-dialog/confirm-dialog.module';


@NgModule({
  declarations: [
    TaskListManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskListManagementRoutingModule,
    AddTaskDialogModule,
    ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskListManagementModule { }
