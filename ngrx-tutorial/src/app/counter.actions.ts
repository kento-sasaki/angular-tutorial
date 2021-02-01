import actionCreaterFactory from 'typescript-fsa'

const actionCreator = actionCreaterFactory()

export const increment = actionCreator('[Counter Component] Increment');
export const decrement = actionCreator('[Counter Component] Decrement');
export const reset = actionCreator('[Counter Component] Reset');
