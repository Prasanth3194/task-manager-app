import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogComponent } from './task-dialog.component';

describe('AddTaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogComponent]
    });
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
