import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pizzasReducer from "../pizzaOrder/redux/reducers/pizzas";
import filtersReducer from "../pizzaOrder/redux/reducers/filters";
import pizzasCartReducer from "../cart/redux/reducers/cartPizzas";
import userDataReducer from "../common/redux/reducers/userData";

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    pizzasCart: pizzasCartReducer,
    userData: userDataReducer,
});
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
