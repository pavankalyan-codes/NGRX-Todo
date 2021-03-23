import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Todo } from './models/todo';
import {
  addTodo,
  getAllTodos,
  SuccessGetToDoAction,
  ErrorToDoAction,
} from './todo/store/action/todo.actions';

import * as TodoActions from '../app/todo/store/action/todo.actions';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  private ApiURL: string = 'https://api.mocki.io/v1/2585e54a';

  GetToDos$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getAllTodos),
      mergeMap((action) =>
        this.http.get(this.ApiURL).pipe(
          map((data: Todo[]) => {
            return TodoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(TodoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );
}
