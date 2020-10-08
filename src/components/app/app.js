import React, { Fragment } from 'react';
import ItemList from '../item-list';
import AppHeader from '../app-header';
import ItemAddReduxForm from '../item-add-form/item-add-form';
import { ResultCardContainer } from '../../containers';
import './app.css';

const App = () => {
  return (
    <Fragment>
      <AppHeader />
      <ItemAddReduxForm />
      <ResultCardContainer />
      <ItemList />
    </Fragment>
  );
};

export default App;
