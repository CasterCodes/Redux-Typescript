import {applyMiddleware, combineReducers,createStore,} from 'redux';
import thunk from 'redux-thunk';
import countReducer from './reducers/countReducer';

const reducers = combineReducers ({
    count:countReducer
})


const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;

export type State = ReturnType<typeof reducers>