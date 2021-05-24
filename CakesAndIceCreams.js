const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
const BUY_CAKE = 'BUY_CAKE';

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

const noOfCakes = {
  noOfCakes: 11,
};
const noOfIceCreams = {
  noOfIceCreams: 20,
};
const cakeReducer = (state = noOfCakes, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = noOfIceCreams, action) => {
  switch (action.type) {
    case 'BUY_ICE_CREAM':
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
