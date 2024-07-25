import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager-app';
  isAboutActive = true;
  isTaskActive = false;

  onActive(navList: any) {
    if(navList === 'About') {
      this.isAboutActive = true;
      this.isTaskActive = false;
    } else {
      this.isAboutActive = false;
      this.isTaskActive = true;
    }
    
  }
}
