import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import One from './one';

it('handles One page', () => {
    const wrapper = mount(<One />);

    expect(toJson(wrapper)).toMatchSnapshot();
});
