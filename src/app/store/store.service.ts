import {Injectable} from '@angular/core';
import {State} from '../models/state';
import {TodoItems} from '../models/todo-items';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: State = {
    todoItems: [{text: 'text 1'}, {text: 'text 2'}]
  };

  addingTodo(text: TodoItems) {
    this.state.todoItems.push(text);
  }

  deletionTodo(i: number) {
    this.state.todoItems.splice(i, 1);
  }

  constructor() {
  }
}
