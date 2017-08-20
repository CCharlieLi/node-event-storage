'use strict';

/**
 * EventStore Class
 *
 * @param {function} Reducer
 * @param {Object} Model
 *
 */
module.exports = class EventStore {
  constructor(reducer, model, enhancer) {
    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }
      enhancer(this);
    }

    this.model = model;
    this.reducer = reducer;
  }

  dispatch(action) {
    return this.reducer(this.model, action);
  }
};
