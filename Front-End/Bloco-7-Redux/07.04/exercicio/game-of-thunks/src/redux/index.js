import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import characterReducer from './reducers/characterReducer';

const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;