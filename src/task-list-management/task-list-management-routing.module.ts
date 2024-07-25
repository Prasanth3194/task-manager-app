import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListManagementComponent } from './task-list-management.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListManagementRoutingModule { }
