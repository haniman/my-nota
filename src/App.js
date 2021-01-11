import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Row,Col,Navbar,Nav,Button} from 'react-bootstrap';
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
               <Nav className="justify-content-center" activeKey="/home">
                  <Nav.Item><Link to="/">Home </Link></Nav.Item>
                  <Nav.Item><Link to={"/tutorials"} className="nav-link">Tutorials </Link></Nav.Item>
                  <Nav.Item><Link to={"/add"} className="nav-link">Add Tutorials </Link></Nav.Item>
                  <Nav.Item><Link to={"/about"}>About Us </Link></Nav.Item>
                  <Nav.Item><Link to={"/testapi"}>Consume API </Link></Nav.Item>
              </Nav>
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