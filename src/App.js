// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import error from './404';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/service' component={Service}/>
        <Route path='/contact' component={Contact}/>
        {/* <Route path='*' exact={true} component={error} /> */}
        <Redirect to='/'/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
