import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return ( 
    <div className = "App">
    < Header branding="Contact Manager" />
    <div className="container">
    < Contact name="John Doe" phone="555-555-5555" email="jdoe@gmail.com" />
    < Contact name="Jane Doe" phone="555-555-6666" email="janedoe@gmail.com" />
    </div>    
    </div>
    );
  }
}

export default App;