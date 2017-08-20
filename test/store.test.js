'use strict';

const chai = require('chai');
const assert = chai.assert;
const EventStore = require('../').EventStore;

const eventModel = [];
const reducer = (Event, action) => {
  Event.push({
    type: action.type,
    data: action.data
  });
  // Data model operation ...
};


describe('Store Test', () => {
  it('should generate store instace', () => {
    const store = new EventStore(reducer, eventModel);
    assert.equal(EventStore.name, 'EventStore');
  });

  it('should update event state', () => {
    const store = new EventStore(reducer, eventModel);
    store.dispatch({
      type: 'ADD_USER',
      data: { userId: 1 }
    });
    assert.lengthOf(eventModel, 1);
    assert.equal(eventModel[0].type, 'ADD_USER');
    assert.equal(eventModel[0].data.userId, 1);
  });
});
