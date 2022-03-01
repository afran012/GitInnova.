import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { GitReducers } from "../reducers/GitReducers";
import { perfilReducer } from "../reducers/perfilReducer";




const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    gitUser: GitReducers,
    profiles: perfilReducer

});


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)