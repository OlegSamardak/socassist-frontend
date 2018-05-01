import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import Navigation from "./components/navbar/navbar";
import LogIn from "./components/auth/log-in";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Visiters from './components/visiters/visiters'
import {Grid, Row} from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Helmet>
                      <link rel={'stylesheet'} href={'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'} integrity={'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u'} crossorigin={"anonymous"}/>
                  </Helmet>
                  <Navigation/>
                  <Grid>
                      <Row >
                          <Route exact={true} path={'/sign-in'} component={LogIn}/>
                          <Route exact={true} path={'/visiters'} component={Visiters}/>
                      </Row>
                  </Grid>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
