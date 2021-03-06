import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      }
      

      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }



  render(){
    return(
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />

      </Switch>
    </div>
  );
}}

export default App;
