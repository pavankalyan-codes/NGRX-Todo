import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  stub = [
    'Learn NGRX',
    'Watch Synders Cut',
    'Take Healthy Food',
    'Sleep 8 hours a dayy',
  ];
  constructor(private http: HttpClient) {}

  getTodos() {
    return of(this.stub);
  }

  addTodo(todo) {
    this.stub.push(todo);
  }
}
