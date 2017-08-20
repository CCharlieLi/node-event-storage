'use strict';

/**
 * Apply Middleware See http://redux.js.org/docs/advanced/Middleware.html
 * @param  {...[functions]} middlewares
 */
module.exports = (...middlewares) => {
  return (store) => {
    let dispatch = store.dispatch;
    middlewares.forEach(middleware =>
      dispatch = middleware(store)(dispatch.bind(store))
    );
    store.dispatch = dispatch;
  };
};
