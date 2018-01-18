import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';


export default function configureStore(preloadedState) {
    let store = createStore(reducers, {}, applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()))
    return store
}
