import React, { Component } from 'react';
import NavBar from './components/NavBarComponent';
import { Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';
import "./App.css";
import IPAddressContainer from './components/IPAddressContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavBar />
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/stuff' component={Stuff} />
            <Route path='/contact' component={Contact} />
          </div>
        </HashRouter>
        <div><br/></div>
        <IPAddressContainer />
      </div>
    );
  }
}

export default App;