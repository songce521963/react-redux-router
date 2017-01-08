import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') { 
  //在开发环境下可以看到 state 的 log
  const logger = require('redux-logger')
  middlewares = [...middlewares, logger]
}


const enhancer = compose(
  	applyMiddleware(...middlewares)
)

const createStoreWithMiddleware = (initialState) =>(
	createStore(rootReducer,initialState,enhancer)
)

export default createStoreWithMiddleware
