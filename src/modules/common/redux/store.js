import {createStore,combineReducers} from 'redux';
import pizzas from './reducers/pizzas';

const rootReducer=combineReducers({
    pizzas
})

 const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store;