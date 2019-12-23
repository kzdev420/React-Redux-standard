import React from 'react';
import { shallow } from 'enzyme';

import { Info } from '.';

describe('Info', () => {
  it('should render', () => {
    const el = shallow(<Info name={'key'} message={'message'} />);
    expect(el).toHaveLength(1);
    expect(el.getElement()).not.toBeNull();
  });

  it('should render null when the message is not defined', () => {
    expect(
      shallow(<Info name={'key'} />).getElement()
    ).toBeNull();
  });
});
