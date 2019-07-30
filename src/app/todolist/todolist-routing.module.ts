import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageTodoComponent} from './page-todo/page-todo.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {path: '', component: PageTodoComponent, children: [{path: '', component: TodoComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule {
}
