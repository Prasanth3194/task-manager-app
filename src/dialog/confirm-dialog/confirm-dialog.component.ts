import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  @Input() public dialogTitle: string = '';
  @Input() public buttonText: string = '';
  @Input() public taskObj: any;
  @Input() public listOfTask: any[] = [];
  @Input() public completedTask: any[] = [];
  @Output() public completedTaskList = new EventEmitter();
  public id!: number;

  /** To close the Mark and Delete dialog. */
  onCloseDialog() {
    const dialog = document.getElementById("deleteDialog");
    if (dialog) {
      dialog.style.display = 'none';
    }
  }

  /** To Mark Completed and delete the task. */
  onSubmitDialog() {
    this.id = this.taskObj.id;
    if(this.id) {
      if (this.buttonText === 'Confirm') {
        this.listOfTask.map((task: any, index: any) => {
          if(task.id === this.id) {
            this.listOfTask.splice(index, 1);
          }
        });
        this.onCloseDialog();
      } 
      else if (this.buttonText === 'Mark') {
        this.listOfTask.map((task, index) => {
          if(task.id === this.id) {
            this.completedTask.push({
              id: this.id,
              title: task.title,
              storyPoints: task.storyPoints
            });
            this.listOfTask.splice(index, 1);
            this.completedTaskList.emit(this.completedTask);
          }
        });
        this.onCloseDialog();
      }
    }
  }
}
