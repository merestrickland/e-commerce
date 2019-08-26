import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />

      </Switch>
    </div>
  );
}

export default App;
