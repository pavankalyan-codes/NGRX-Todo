import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import * as TodoActions from '../action/todo.actions';
export const todoFeatureKey = 'todo';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [{ name: 'hai' }, { name: 'bye' }],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state: TodoState, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(TodoActions.removeTodo, (state: TodoState, { i }) => ({
    ...state,
    todos: state.todos.filter(function (x, index) {
      return index != i;
    }),
  }))
);

export function reducer(state: TodoState | undefined, action: Action): any {
  return todoReducer(state, action);
}
