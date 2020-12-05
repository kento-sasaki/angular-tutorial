import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent {
  @Input()
  user!: User
}
