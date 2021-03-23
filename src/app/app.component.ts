import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { delay, pluck } from 'rxjs/operators';
import { Todo } from './models/todo';
import { select, Store } from '@ngrx/store';

import {
  TodoState,
  initialState,
} from '../app/todo/store/reducer/todo.reducer';
import { selectTodos } from './todo/store/selector/todo.selectors';
import { addTodo } from './todo/store/action/todo.actions';

import * as TodoActions from '../app/todo/store/action/todo.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  todos$: Observable<any>;

  todo: string = '';

  constructor(private apiServie: ApiService, private store: Store<TodoState>) {
    this.todos$ = this.store.select(selectTodos);

    this.todos$.subscribe((data) => {
      console.log(data);
    });
  }

  addTodo() {
    if (this.todo.trim() === '') return;
    const todo = new Todo();
    todo.name = this.todo;

    this.store.dispatch(addTodo(todo));
    this.todo = '';
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.getAllTodos());
  }
}
