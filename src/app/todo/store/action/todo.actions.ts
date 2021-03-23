import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';

export const addTodo = createAction('[Todo] Add Todos', (todo: Todo) => ({
  todo,
}));

export const removeTodo = createAction('[Todo] Remove Todos', (i: number) => ({
  i,
}));

export const getAllTodos = createAction('[Todo] Get All Todos');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Success Get ToDo',
  props<{ payload: Todo[] }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
