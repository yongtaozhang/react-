import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Admine from '../layouts/Admine/Admine'

const App = ({ location }) => {
if(location.pathname === '/'){
    return (<Admine />);
  }else{
    return (
      <MainLayout>
        <Todos location={ location } />
      </MainLayout>
    );
  }
};

App.propTypes = {
};

export default App;
