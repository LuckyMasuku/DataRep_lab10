import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
//these controls helps to switch to different components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//main component
class App extends Component {
  //Argurment
  render() {
    return (
      //router controls the div elements
      //router allows differnts paths to be called in different elements were theyre included
      //nav allows the links to function in different pages
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
            </Nav>

          </Navbar>
          <br />
          
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />

          </Switch>


        </div>
      </Router>

    );
  }
}

export default App;
