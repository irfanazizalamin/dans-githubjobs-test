import Job from '../../../components/JobComponent'
import SearchBar from '../../../components/SearchBarComponent'

import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

import { API_URL } from '../../../utils/constants'
import axios from 'axios'

export default class Home extends Component {

  state = {
    jobs: [],
    filteredJobs: [],
    isFiltered: false
  }

  componentDidMount() {
    axios.get(API_URL + 'positions.json')
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
    const { filteredJobs, isFiltered } = this.state

    const getFilteredJobs = (filter) => {
      const filteredJobs = this.state.filteredJobs.filter(item => {
        for (var key in filter) {
          if (item[key] === undefined || !(item[key].toLowerCase().includes(filter[key].toLowerCase())))
            return false;
        }
        return true;
      })

      this.setState({
        filteredJobs,
        isFiltered: true
      })
    }

    const handleJobDetail = (data) => {
      this.props.history.push(`detail/${data}`)
    }

    const renderAuthButton = () => {
      if (isFiltered) {
        return (
          <h4>Showing {filteredJobs.length} jobs</h4>
        );
      } else {
        return (
          <h4>Job List</h4>
        );
      }
    }

    return (
      <div className="App">
        {/* filter */}
        <SearchBar getFilteredJobs={getFilteredJobs} />

        <Container>
          { renderAuthButton() }
        </Container>

        {/* list jobs */}
        <Container>
          { filteredJobs && filteredJobs.map((job) => {
            return (
              <Job
                data={job}
                key={job.id}
                jobDetail={(data) => handleJobDetail(data)}
              />
            )
          }) }
        </Container>
      </div>
    )
  }
}
