import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import One from './one';
import { createStore as createStoreRedux } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const reducers = (state, action) => {
    const s = state || {};
    return {
        counter: counter(s.counter, action),
    };
};


function createStore() {
    return createStoreRedux(reducers);
}

it('handles One page', () => {
    const store = createStore();

    const wrapper = mount(<One />, { context: { store } });

    expect(toJson(wrapper)).toMatchSnapshot();
});
