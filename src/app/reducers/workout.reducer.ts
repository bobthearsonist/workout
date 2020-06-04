import * as WorkoutActions from '../actions/workout.actions';
import { Workout }         from '../models/workout.model'

export type Action = WorkoutActions.All;

/// Default app state
const defaultState: Workout = {
  text: 'Hello. I am the default workout',
  likes: 0
}

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}


/// Reducer function
export function workoutReducer(state: Workout = defaultState, action: Action) {
  console.log(action.type, state)

	switch (action.type) {
  		case WorkoutActions.EDIT_TEXT:
  			return newState(state, { text: action.payload });

      case WorkoutActions.UPVOTE:
        return newState(state, { likes: state.likes + 1 });

  		case WorkoutActions.DOWNVOTE:
  			return newState(state, { likes: state.likes - 1 });

  		case WorkoutActions.RESET:
  			return defaultState;

  		default:
  			return state;

	}
}
