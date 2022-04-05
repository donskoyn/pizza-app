import React, { useEffect } from 'react';
import Header from '../common/components/Header'
import AppRouter from '../common/components/AppRouter';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { refreshUser } from '../common/redux/actions/userData';
import Preloader from '../common/components/Preloader';
import { userDataTypes } from '../common/constants';

const App = () => {

  const dispatch = useDispatch()
  const loaded = useSelector(({ userData }: RootState) => userData.loaded);
  useEffect(() => {
    localStorage.getItem('token') ? dispatch(refreshUser()) : dispatch({
      type: userDataTypes.SET_LOADED_USER,
      payload: true
    });

  }, [])
  return (
    <div className={loaded ? styles.wrapper : styles.wrapperPreloader}>
      {loaded ?
        <>
          <Header />
          <div className={styles.content}>
            <AppRouter />
          </div>
        </>
        :
        <Preloader />
      }
    </div>
  )
}

export default App
