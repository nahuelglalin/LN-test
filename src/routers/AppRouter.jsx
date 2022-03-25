import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import BodyScreen from '../components/body/BodyScreen';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import LoginScreen from '../components/login/LoginScreen'
import SubscribeScreen from '../components/subscribe/SubscribeScreen';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
            <Route path="/" element={<BodyScreen />}/>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/subscribe" element={<SubscribeScreen />}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default AppRouter