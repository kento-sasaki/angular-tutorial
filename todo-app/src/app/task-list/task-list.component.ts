import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks: Task[] = [
    {title: '牛乳を買う', done: false, deadline: new Date('2020-01-01')},
    {title: '可燃ごみを捨てる', done: true, deadline: new Date('2021-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2021-01-03')},
    {title: 'シャンプー買う', done: false, deadline: new Date('2021-01-04')},
  ]

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  ngOnInit() {
  }

}
