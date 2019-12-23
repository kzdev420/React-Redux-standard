import React from 'react';
import { shallow } from 'enzyme';

import CardIcon from '.';
import styles from './index.module.css';

describe('CardIcon', () => {
  it('should render', () => {
    expect(
      shallow(<CardIcon />)
    ).toHaveLength(1);
  });

  it('turns the cardType into a class', () => {
    expect(
      shallow(<CardIcon cardType="American Express" color="light" />).hasClass(styles['AmericanExpress'])
    ).toEqual(true);
  });
});
