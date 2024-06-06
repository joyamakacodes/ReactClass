import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { CounterState } from "../reducers/countReducers";
import { TodosReducer } from "../reducers/todoReducers";
const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const reducers = combineReducers(
  {
    count: CounterState,
    todo: TodosReducer
  }
)

export const configureStore = () => {
  const store = createStore(
reducers, 
composeEnhancer(applyMiddleware(thunk))
  )
  return store
}

