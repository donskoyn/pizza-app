import React from 'react';
import Header from '../common/components/Header'
import AppRouter from '../common/components/AppRouter';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
