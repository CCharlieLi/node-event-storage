'use strict';

const chai = require('chai');
const assert = chai.assert;
const { EventStore } = require('../');

const reducer = () => {};
const model = {};

describe('Store Test', () => {
  it('should generate store instace', (done) => {
    const store = new EventStore(reducer, model);
    assert.equal(EventStore.name, 'EventStore');
    done();
  });
});
