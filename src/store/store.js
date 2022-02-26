import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';
const configureStore = () => {
    //middleware const middleware = [thunk]
    return createStore(reducer, applyMiddleware(thunk))
    // return createStore(reducer)

}

export { configureStore }