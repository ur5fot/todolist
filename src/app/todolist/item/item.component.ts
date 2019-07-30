import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../store/store.service';
import {TodoItems} from '../../models/todo-items';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  todoItems: TodoItems;

  @Input()
  index: number;

  constructor(private store: StoreService) {
  }

  ngOnInit() {

  }

  toDone(i) {
    this.store.deletionTodo(i);
  }

}
