import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from '.'

describe('ListItem', () => {
  it('should render', () => {
    const sub = {
      first_name: '',
      last_name: ''
    }
    
    expect(
      shallow(<ListItem subscription={sub} />)
    ).toHaveLength(1);
  })
});
