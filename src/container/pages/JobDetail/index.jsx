import React, { Component } from 'react'
import './style.css'
import {
  Row,
  Col,
  Card,
  Container
} from 'react-bootstrap';

import { API_URL } from '../../../utils/constants'
import axios from 'axios'

export default class JobDetailComponent extends Component {
  state = {
    job: {}
  }

  componentDidMount() {
    let id = this.props.match.params.id

    axios.get(API_URL + `positions/${id}`)
      .then(res => {
        this.setState({
          job: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
    
  }

  render() {
    const { job } = this.state
    const goBack = () => {
      this.props.history.goBack();
    }

    return (
      <div className="job-detail-component">
        <button onClick={goBack}>Back</button>

        <Card>
          <p>{job.type} / {job.location}</p>
          <h4>{ job.title }</h4>

          <hr />

          <Container fluid>
            <Row>
              <Col md={8}>
                <div dangerouslySetInnerHTML={{__html: job.description}} />
              </Col>

              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      { job.company }
                    </Card.Title>
                    <Card.Img variant="top" src={job.company_logo} />
                    <a href={job.company_url} target="_blank">{job.company_url}</a>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title>
                      How To Apply
                    </Card.Title>
                    <Card.Text>
                      <div dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    )
  }
}
