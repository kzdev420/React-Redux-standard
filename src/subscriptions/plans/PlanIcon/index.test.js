import React from 'react';
import { shallow } from 'enzyme';
import PlanIcon from '.';

describe('PlanIcon', () => {
  it('should render', () => {
    expect(
      shallow(<PlanIcon plan={{}} />)
    ).toHaveLength(1);
  });
});
