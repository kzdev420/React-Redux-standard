import React from 'react';
import { shallow } from 'enzyme';

import { Warning } from '.';

describe('Warning', () => {
  it('should render', () => {
    const el = shallow(<Warning name={'key'} message={'message'} />);
    expect(el).toHaveLength(1);
    expect(el.getElement()).not.toBeNull();
  });

  it('should render null when the message is not defined', () => {
    expect(
      shallow(<Warning name={'key'} />).getElement()
    ).toBeNull();
  });
});
