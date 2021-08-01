import React, { Component, Fragment } from 'react'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import JobDetail from '../pages/JobDetail'
import Navbar from '../../components/NavbarComponent'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {/* navbar */}
          <Navbar />

          <Route path="/login" component={Login}></Route>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/detail/:id" component={JobDetail}></Route>
        </Fragment>
      </Router>
    );
  }
}

export default Home;