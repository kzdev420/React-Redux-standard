import React from 'react';
import styles from './App.module.css';
import Screen from './Screen';
import MainMenu from './MainMenu';

import Info from 'notifications/Info';
import Warning from 'notifications/Warning';

const App = () => (
  <div className={styles.App}>
    <MainMenu />
    <div className={styles.container}>
      <Info name="general" />
      <Warning name="general" />

      <Screen />
    </div>
  </div>
);

export default App;
