import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import {Jumbotron,Container,Row,Col,Navbar,Navs,Button} from 'react-bootstrap';
import Main from './components/MainComponent';
import About from './components/AboutComponent';
import Tutorial from './components/Tutorial';
import TutorialList from './components/TutorialsList';
import AddTutorial from './components/AddTutorial';
import TestApi from './components/TestApi';

const App = () => {
  return (
     <>
    <BrowserRouter>
   
         <Navbar expand="lg"  className="navbar navbar-expand navbar-dark bg-dark">
              <a
                className="navbar-brand"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              > LOGO
              </a>
               <nav>
                  <Link to="/">Home </Link>
                  <Link to={"/tutorials"} className="nav-link">Tutorials</Link>
                  <Link to={"/add"} className="nav-link">Add Tutorials</Link>
                  <Link to="/about">About Us </Link>
                  <Link to="/testapi">Consume API</Link>
              </nav>
         </Navbar>

         <Container>
            <Row>
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/about" component={About} />
                <Route exact path={["/", "/tutorials"]} component={TutorialList} />
                <Route exact path="/add" component={AddTutorial} />
                <Route path="/tutorials/:id" component={Tutorial} />
                 <Route path="/testapi" component={TestApi} />
              </Switch> 
            </Row>
        </Container>
    </BrowserRouter>
    </>
  );
}

export default App;