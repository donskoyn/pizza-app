import React from 'react';
import '../common/styles/app.scss';
import Header from '../common/components/Header'
import AppRouter from '../common/components/AppRouter';


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
