import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { removeTodo } from '../todo/store/action/todo.actions';
import { TodoState } from '../todo/store/reducer/todo.reducer';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  @Input() todos: Observable<Todo[]>;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {
    this.todos.subscribe((data) => {
      console.log(data);
    });
  }

  remove(index) {
    console.table(index);
    this.store.dispatch(removeTodo(index));
  }
}
