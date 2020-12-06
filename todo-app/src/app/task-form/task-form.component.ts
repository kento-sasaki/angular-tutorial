import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter<Task>()

  newTask: Task = {
    title: '',
    deadline: null,
    done: false
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.addTask.emit({
      title: this.newTask.title,
      deadline: this.newTask.deadline ? new Date(this.newTask.deadline) : null,
      done: false,
    })

    this.newTask = {
      title: '',
      deadline: null,
      done: false
    }
  }

}
