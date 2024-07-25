import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit, OnChanges {
  @Input() public listOfTask: any[] = [];
  @Input() public taskObj: any;
  @Input() public buttonText: string = 'Add';
  public form!: FormGroup;
  public id!: number;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    });
    console.log(this.taskObj);
  }

  ngOnInit(): void {
    console.log(this.taskObj, this.form.value);
  }  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.taskObj && this.buttonText === 'Update') {
      this.form.setValue({title: this.taskObj?.title, storyPoints: this.taskObj?.storyPoints});
      this.id = this.taskObj.id;
    }
  }

  /** To close the Add and Update Form Dialog. */
  onAddTaskCloseDialog() {
    const dialog = document.getElementById("taskDialog");
    console.log(dialog);
    if (dialog) {
      dialog.style.display = 'none';
    }
  }

  /** To Add and Update the task with this submit function. */
  onSubmit() {
    console.log(this.form, this.id, this.buttonText, this.listOfTask);
    if(this.id) {
      if (this.buttonText === 'Update') {
        this.listOfTask.map((task: any) => {
          if(task.id === this.id) {
            task.title = this.form.value.title;
            task.storyPoints = this.form.value.storyPoints;
          }
        });
        console.log(this.listOfTask);
      }  
    } else if(!this.id) {
      const taskObj = this.form.value;
      console.log(taskObj);
      taskObj['id'] = Math.floor(Math.random() * 10000);
      console.log(taskObj);
      this.listOfTask.push(taskObj);
      console.log(this.listOfTask);
      this.form.reset();
    }
    this.onAddTaskCloseDialog();
  }
}
