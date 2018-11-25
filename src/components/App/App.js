import React, { Component } from 'react';
import Main from '../Main/Main';
import {Link} from 'react-router-dom';

import './App.css';
import 'whatwg-fetch';

// import Series from '../../containers/Series'


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' className="blanco"><h1> Lista de series de TV </h1></Link>
        </header>

        <Main />
      </div>
    );
  }
}

export default App;
