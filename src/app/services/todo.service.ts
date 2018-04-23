import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  // declare todos as array
  private todos: Todo[];
  // declare nextId as ID
  private nextId: number;

  constructor() {
    this.todos = [];
    this.nextId = 0;
  }

  // Add tasks in todo list at first point
  public addTodo(text: string): void {
    const todo = new Todo(this.nextId, text);
    this.todos = [todo , ...this.todos];
    this.nextId++;
  }

  // Get list on web-page
  public getTodos(): Todo[] {
    return this.todos;
  }

  // Remove tasks from list
  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}
