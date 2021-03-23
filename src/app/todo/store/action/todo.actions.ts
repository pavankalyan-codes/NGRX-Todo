import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';

export const addTodo = createAction('[Todo] Add Todos', (todo: Todo) => ({
  todo,
}));

export const removeTodo = createAction('[Todo] Remove Todos', (i: number) => ({
  i,
}));
