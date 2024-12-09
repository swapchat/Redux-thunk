import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ user: userReducer }),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("state", store.getState());
});

export default store;
