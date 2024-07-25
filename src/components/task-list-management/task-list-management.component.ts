import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list-management',
  templateUrl: './task-list-management.component.html',
  styleUrls: ['./task-list-management.component.scss']
})
export class TaskListManagementComponent implements OnInit {

  public listOfTask: any[] = [];
  public completedTask: any[] = [];
  public taskObj: any;
  public id!: number;
  public form!: FormGroup;
  public markForm!: FormGroup;
  public buttonText: string = 'Add';
  public dialogTitle: string = '';
  public isChecked: boolean = false;
  public isTaskDialog: boolean = false;
  public isConfirmDialog: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    });
    this.listOfTask = [
      {
        id: 2367,
        title: 'Add Header Navigation Bar',
        storyPoints: '6'
      },
      {
        id: 8778,
        title: 'Add Two Routes with About and Task',
        storyPoints: '4'
      },
      {
        id: 4545,
        title: 'Add list of tasks in Task Page',
        storyPoints: '8'
      },
    ] 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    })
    this.markForm = this.formBuilder.group({
      markAsCompleted: [false, Validators.requiredTrue]
    });
  }

  /** To Open the dialog of Add task.*/
  onAddTaskOpenDialog() {
    this.isTaskDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("taskDialog");
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  /** To Open the dialog of Update task.*/
  onEditTaskOpenDialog(taskObj: any) {
    this.isTaskDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("taskDialog");
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  /** To Open the dialog of Delete task.*/
  onOpenDialog() {
    this.isConfirmDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("deleteDialog");
      this.dialogTitle = `Are you sure want to delete this task - #${ this.taskObj.id}?`;
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  /** To Open the dialog of Mark task as completed.*/
  onMarkAsCompleted(taskObj: any, markTxt: string, event: any) {
    const isChecked = event.target.checked;
    this.isConfirmDialog = true;
    if (isChecked) {
      this.taskObj = taskObj;
      this.buttonText = markTxt;
      this.dialogTitle = `Are you sure want to mark this task -  #${this.taskObj.id} as completed?`;
      setTimeout(() => {
        const dialog = document.getElementById("deleteDialog");
        if (dialog) {
          dialog.style.display = 'block';
        }
      }, 0);
    }
  }

  onEditTask(taskObj: any, updateTxt: string) {
    this.taskObj = taskObj;
    this.buttonText = updateTxt;
    this.onEditTaskOpenDialog(this.taskObj);
  }

  onDeleteTask(taskObj: any, deleteTxt: string) {
    this.taskObj = taskObj;
    this.buttonText = deleteTxt;
    this.onOpenDialog();
  }

  checkBoxStatus(event: any) {
    this.isChecked = event;
  }
}
