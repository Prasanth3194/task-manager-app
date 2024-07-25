import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDialogComponent } from './task-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskDialogComponent
  ]
})
export class AddTaskDialogModule { }
