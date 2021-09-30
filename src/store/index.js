import { createStore,combineReducers } from "redux";
import reducerCounter from "./modules/counter/reducer";

const reducers = combineReducers({counter: reducerCounter})
export const store = createStore(reducers)
