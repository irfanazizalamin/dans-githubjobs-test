import React, { useState } from "react";
import './style.css'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

const SearchBarComponent = (props) => {
  const [jobSearch, setJobSearch] = useState({
    title: '',
    location: '',
    type: '',
  })

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }))
  }

  const filterJobs = () => {
    props.getFilteredJobs(jobSearch)
  }

  return (
    <Container className="search-bar-component">
      <Form>
        <Row>
          <Col>
            <Form.Group>
              {/* <Form.Label>Job Description</Form.Label> */}
              <Form.Control
                onChange={handleChange}
                value={jobSearch.title}
                name="title"
                type="text"
                placeholder="job description"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              {/* <Form.Label>Location</Form.Label> */}
              <Form.Control
                onChange={handleChange}
                value={jobSearch.location}
                name="location"
                type="text"
                placeholder="location"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
                onChange={handleChange}
                value={jobSearch.type}
                name="type"
              >
                <option>Job Type</option>
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2} style={{textAlign: 'center'}}>
            <Button onClick={filterJobs} variant="primary" type="button">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBarComponent;
