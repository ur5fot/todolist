import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComponent} from './add/add.component';
import {TodoComponent} from './todo/todo.component';
import {PageTodoComponent} from './page-todo/page-todo.component';
import {TodolistRoutingModule} from './todolist-routing.module';
import {ItemComponent} from './item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddComponent, TodoComponent, PageTodoComponent, ItemComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [],
  providers: []
})
export class TodolistModule {
}
