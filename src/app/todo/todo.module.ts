import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoFeatureKey, reducer } from './store/reducer/todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(todoFeatureKey, reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class TodoModule {}
