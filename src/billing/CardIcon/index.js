import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

import { camelCase } from 'helpers/formatters';

const CardIcon = ({ cardType, color }) => {
  if (!cardType) { return null; }
  if (!['dark', 'light'].includes(color)) { return null; }

  cardType = camelCase(cardType);

  return (
    <span className={cn(styles.CardIcon, styles[cardType], styles[color])} />
  )
}

export default CardIcon;
