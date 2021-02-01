import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './counter.actions';

export const initialState = 0;

export const counterReducer = reducerWithInitialState(0)
  .case(actions.increment, state => state + 1)
  .case(actions.decrement, state => state - 1)
  .case(actions.reset, state => initialState)
