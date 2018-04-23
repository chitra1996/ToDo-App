import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todo;
  public todoText: string;
  public isEditing: boolean;
  public completed: boolean;

  constructor(public todoService: TodoService) {
    this.isEditing = false;
    this.completed = false;
    this.todoText = '';
   }

  ngOnInit() {
  }

  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

  public editTodo(): void {
    this.isEditing = true;
  }

  public toggle(): void {
    if (this.completed === true) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

}
