import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  // todo task to be added in Todo[]
  public todoText: string;
  // isEmpty variable to check whether input is empty
  public isEmpty: boolean;
  // editList variable to check whether the input box is in focus or not
  public editList: boolean;

  /**
   * @param todoService Service to add Todo service to the constructor
   */
  constructor(public todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  // add todo task in the list if todo input is not empty
  public addTodo(): void {
    if (this.todoText !== '') {
        this.todoService.addTodo(this.todoText);
        this.todoText = '';
        this.isEmpty = false;
    } else {
        this.isEmpty = true;
    }
  }

}
