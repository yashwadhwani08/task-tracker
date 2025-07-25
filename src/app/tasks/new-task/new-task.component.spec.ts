import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';

describe('AddTasksComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
