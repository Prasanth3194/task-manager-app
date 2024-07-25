import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { TaskListManagementComponent } from 'src/components/task-list-management/task-list-management.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tasks',
    component: TaskListManagementComponent
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
