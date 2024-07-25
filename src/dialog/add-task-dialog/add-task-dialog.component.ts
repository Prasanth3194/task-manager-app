import { Component, DestroyRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public listOfTask: any[] = []; // recently changed
  @Input() public taskObj: any;
  @Input() public buttonText: string = 'Add';
  @Output() addInTaskList = new EventEmitter();
  public form!: FormGroup;
  public id!: number;
  // public listOfTask: any[] = [];
  public completedTask: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private destroyRef: DestroyRef
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      storyPoints: ['', Validators.required]
    });
    console.log(this.taskObj);
    
  }

  ngOnInit(): void {
    console.log(this.taskObj);
    // if (this.taskObj) {
    //   this.form.setValue({title: this.taskObj?.title, storyPoints: this.taskObj?.storyPoints});
    //   this.id = this.taskObj.id;
    // }
  }  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.taskObj && this.buttonText === 'Update') {
      this.form.setValue({title: this.taskObj?.title, storyPoints: this.taskObj?.storyPoints});
      this.id = this.taskObj.id;
    }
  }

  onAddTaskCloseDialog() {
    const dialog = document.getElementById("taskDialog");
    console.log(dialog);
    if (dialog) {
      dialog.style.display = 'none';
      // this.form.reset();
    }
  }

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
        // this.taskList.emit(this.allTask);
      }  
    } else if(!this.id) {
      const taskObj = this.form.value;
      console.log(taskObj);
      taskObj['id'] = Math.floor(Math.random() * 100);
      console.log(taskObj);
      this.listOfTask.push(taskObj);
      console.log(this.listOfTask);
      // this.addInTaskList.emit(this.listOfTask);
    }
    this.onAddTaskCloseDialog();
  }

  ngOnDestroy(): void {
    this.destroyRef.onDestroy(() => {
      console.log('UserProfile destruction');
    });
  }
}
