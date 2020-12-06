import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  @Input() task!: Task; // なにこれ

  ngOnInit(): void {
  }

  isOverdue(task: Task): boolean {
    // return !task.done && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
    return !task.done && !!task.deadline && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }
}
