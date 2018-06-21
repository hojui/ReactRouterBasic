import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink,Route,BrowserRouter} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav class="nav">
          <NavLink exact className="nav-link" to="/" activeClassName="active">Home</NavLink>
          <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
          <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;
