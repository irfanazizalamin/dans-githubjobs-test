import Navbar from './components/NavbarComponent'
import Job from './components/JobComponent'
import SearchBar from './components/SearchBarComponent'

import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
  Form,
  Button
} from 'react-bootstrap';

import { API_URL } from './utils/constants'
import axios from 'axios'

export default class App extends Component {

  state = {
    jobs: [],
    filteredJobs: []
  }

  componentDidMount() {
    axios.get(API_URL)
      .then(res => {
        this.setState({
          jobs: res.data,
          filteredJobs: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
    
  }

  render() {
    const { filteredJobs } = this.state

    const getFilteredJobs = (filter) => {
      const filteredJobs = this.state.filteredJobs.filter(item => {
        for (var key in filter) {
          if (item[key] === undefined || !(item[key].toLowerCase().includes(filter[key].toLowerCase())))
            return false;
        }
        return true;
      })

      this.setState({
        filteredJobs
      })
    }

    return (
      <div className="App">
        {/* navbar */}
        <Navbar />

        {/* filter */}
        <SearchBar getFilteredJobs={getFilteredJobs} />

        {/* list jobs */}
        <Container fluid>
          <Row>
            <Col>
              <Row>
                { filteredJobs && filteredJobs.map((job) => {
                  return (
                    <Job data={job} key={job.id} />
                  )
                }) }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
