import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '.';

describe('Home component', () => {
  it('should render', () => {
    expect(
      shallow(<Home />)
    ).toHaveLength(1);
  });
});
