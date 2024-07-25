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
    console.log('Constructor', this.listOfTask);
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
    console.log('ngOnit', this.listOfTask);
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
      console.log(dialog);
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
      console.log(dialog);
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
    console.log(taskObj, markTxt, this.markForm.value, event.target.checked);
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

  checkBoxStatus(event: any) {
    console.log(event);
    this.isChecked = event;
  }

  // onSubmit() {
  //   console.log(this.form, this.id, this.buttonText);
  //   if(this.id) {
  //     if (this.buttonText === 'Update') {
  //       this.listOfTask.map(task => {
  //         if(task.id === this.id) {
  //           task.title = this.form.value.title;
  //           task.storyPoints = this.form.value.storyPoints;
  //         }
  //       })
  //     } else if (this.buttonText === 'Confirm') {
  //       console.log('Confirm');
  //       this.listOfTask.map((task, index) => {
  //         if(task.id === this.id) {
  //           console.log('true');
  //           this.listOfTask.splice(index, 1);
  //         }
  //       });
  //       // this.onCloseDialog();
  //     } else if (this.buttonText === 'Mark') {
  //       console.log('Mark');
  //       this.listOfTask.map((task, index) => {
  //         if(task.id === this.id) {
  //           this.completedTask.push({
  //             id: this.id,
  //             title: task.title,
  //             storyPoints: task.storyPoints
  //           });
  //           this.listOfTask.splice(index, 1);
  //         }
  //       })
  //       console.log(this.completedTask);
  //       console.log(this.listOfTask);
  //       // this.onCloseDialog();
  //     }
  //   } else if(!this.id) {
  //     const taskObj = this.form.value;
  //     console.log(taskObj);
  //     taskObj['id'] = Math.floor(Math.random() * 100);
  //     console.log(taskObj);
  //     this.listOfTask.push(taskObj);
  //   }
  //   // this.onAddTaskCloseDialog();
  // }
}
