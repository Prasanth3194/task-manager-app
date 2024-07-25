import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

// export interface ListOfTask {
//   task: Tasks
// }

// export interface Tasks {
//   id: number;
//   title: string;
//   storyPoints: string;
// }

export class Task {

  constructor(
    public title: string,
    public storyPoints: string
  ) {  }

}

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
    console.log('Constructor', this.listOfTask);
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    });
    this.listOfTask = [
      {
        id: 23,
        title: 'Add Header Navigation Bar',
        storyPoints: '6'
      },
      {
        id: 87,
        title: 'Add Two Routes with About and Task',
        storyPoints: '4'
      },
      {
        id: 45,
        title: 'Add list of tasks in Task Page',
        storyPoints: '8'
      },
    ] 
  }

  ngOnInit(): void {
    console.log('ngOnit', this.listOfTask);
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    })
    this.markForm = this.formBuilder.group({
      markAsCompleted: [false, Validators.requiredTrue]
    });
  }

  onAddTaskOpenDialog() {
    this.isTaskDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("taskDialog");
      console.log(dialog);
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  onEditTaskOpenDialog(taskObj: any) {
    this.isTaskDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("taskDialog");
      console.log(dialog);
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  onOpenDialog() {
    this.isConfirmDialog = true;
    setTimeout(() => {
      const dialog = document.getElementById("deleteDialog");
      this.dialogTitle = 'Are you sure want to delete this task?';
      if (dialog) {
        dialog.style.display = 'block';
      }
    }, 0);
  }

  // onAddTaskCloseDialog() {
  //   const dialog = document.getElementById("taskDialog");
  //   console.log(dialog);
  //   if (dialog) {
  //     dialog.style.display = 'none';
  //   }
  // }

  // onCloseDialog() {
  //   this.isChecked = false;
  //   const dialog = document.getElementById("deleteDialog");
  //   console.log(dialog);
  //   if (dialog) {
  //     dialog.style.display = 'none';
  //   }
  // }

  onSubmitDialog() {
    this.onSubmit();
  }

  onEditTask(taskObj: any, updateTxt: string) {
    console.log(taskObj);
    this.taskObj = taskObj;
    this.buttonText = updateTxt;
    this.onEditTaskOpenDialog(this.taskObj);
  }

  onDeleteTask(taskObj: any, deleteTxt: string) {
    console.log(taskObj);
    this.taskObj = taskObj;
    this.buttonText = deleteTxt;
    this.onOpenDialog();
  }

  onMarkAsCompleted(taskObj: any, markTxt: string, event: any) {
    console.log(taskObj, markTxt, this.markForm.value, event.target.checked);
    const isChecked = event.target.checked;
    this.isConfirmDialog = true;
    if (isChecked) {
      this.taskObj = taskObj;
      this.buttonText = markTxt;
      this.dialogTitle = 'Are you sure want to mark this task as completed?';
      setTimeout(() => {
        const dialog = document.getElementById("deleteDialog");
        if (dialog) {
          dialog.style.display = 'block';
        }
      }, 0);
    }
  }

  checkBoxStatus(event: any) {
    console.log(event);
    this.isChecked = event;
  }

  onSubmit() {
    console.log(this.form, this.id, this.buttonText);
    if(this.id) {
      if (this.buttonText === 'Update') {
        this.listOfTask.map(task => {
          if(task.id === this.id) {
            task.title = this.form.value.title;
            task.storyPoints = this.form.value.storyPoints;
          }
        })
      } else if (this.buttonText === 'Confirm') {
        console.log('Confirm');
        this.listOfTask.map((task, index) => {
          if(task.id === this.id) {
            console.log('true');
            this.listOfTask.splice(index, 1);
          }
        });
        // this.onCloseDialog();
      } else if (this.buttonText === 'Mark') {
        console.log('Mark');
        this.listOfTask.map((task, index) => {
          if(task.id === this.id) {
            this.completedTask.push({
              id: this.id,
              title: task.title,
              storyPoints: task.storyPoints
            });
            this.listOfTask.splice(index, 1);
          }
        })
        console.log(this.completedTask);
        console.log(this.listOfTask);
        // this.onCloseDialog();
      }
    } else if(!this.id) {
      const taskObj = this.form.value;
      console.log(taskObj);
      taskObj['id'] = Math.floor(Math.random() * 100);
      console.log(taskObj);
      this.listOfTask.push(taskObj);
    }
    // this.onAddTaskCloseDialog();
  }
}
