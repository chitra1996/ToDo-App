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

  /**
   * @param todoService todoService from the services which gives task
   */
  constructor(public todoService: TodoService) {
    this.isEditing = false;
    this.completed = false;
    this.todoText = '';
   }

  ngOnInit() {
  }

  // function to remove task of the given id
  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

  // function to make the task editable
  public editTodo(): void {
    this.isEditing = true;
  }

  // fuction to mark the task as completed
  public toggle(): void {
    if (this.completed === true) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

}
