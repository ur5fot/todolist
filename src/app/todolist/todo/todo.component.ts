import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../store/store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoItems: any = this.store.state.todoItems;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
  }
}
