import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Workout } from './models/workout.model';
import * as WorkoutActions from './actions/workout.actions';


interface AppState {
  workout: Workout;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  workout: Observable<Workout>

  text: string; /// form input val

  constructor(private store: Store<AppState>) {
    this.workout = this.store.select('workout')
  }

  editText() {
    this.store.dispatch(new WorkoutActions.EditText(this.text) )
  }

  resetPost() {
    this.store.dispatch(new WorkoutActions.Reset())
  }

  upvote() {
    this.store.dispatch(new WorkoutActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new WorkoutActions.Downvote())
  }
}
