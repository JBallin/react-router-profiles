import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default(initialState) => {
  const middleware = [thunkMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
}
