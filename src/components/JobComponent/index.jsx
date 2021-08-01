import React from "react";
import './style.css'
import {Row, Col, Card } from 'react-bootstrap';

const JobComponent = (props) => {
  const date1 = Date.parse(props.data.created_at);
  const date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  return (
    <div className="job-component">
      <Card style={{cursor: 'pointer'}} onClick={() => props.jobDetail(props.data.id)}>
        <Card.Body>
          <Row>
            <Col className="job-component__left">
              <div className="title">{ props.data.title }</div>
              <div>
                <span className="company">{ props.data.company }</span> - <span className="job-type"> { props.data.type } </span>
              </div>  
            </Col>
            <Col className="job-component__right">
              <div className="location">{ props.data.location }</div>
              <div className="posted-at">{ diffDays } { diffDays === 1 ? 'day' : 'days' } ago</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobComponent;
