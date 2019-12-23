import React from 'react';
import { Warning } from './Warning';

const StaticWarning = ({ children }) => (
  <Warning message={children} />
);

export default StaticWarning; 
