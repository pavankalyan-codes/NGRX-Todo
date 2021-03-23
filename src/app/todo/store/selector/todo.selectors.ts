import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodo from '../reducer/todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>(
  fromTodo.todoFeatureKey
);

export const selectTodos = createSelector(
  selectTodoState,
  (state: fromTodo.TodoState) => state.todos
);
