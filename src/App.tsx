import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './components/homePage/home_page';
import DetailsPage from './components/detailsPage/details_page';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    < >
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details/:page' component={DetailsPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
