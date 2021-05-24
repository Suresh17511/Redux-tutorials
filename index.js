const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';

//action creator that returns an action
const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
//Reducer accepts previous state and actions as argument return new state

// initial state
const initialState = {
  noOfCakes: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {...state, noOfCakes: state.noOfCakes - 1};
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log('Initial State', store.getState());
//executed every time when the state in the redux door changes
const unsubscribe = store.subscribe(() =>
  console.log('Update state ', store.getState())
);
//allows to update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
