import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';
export default function JobPost({job}) {
  return (
    <Col>
            <Card body className='rounded mt-5' >
            {moment().startOf(job.startDate).fromNow()<'72 hours ago' && <Badge bg="primary">New</Badge>}
              <p className='text-center fs-5 fw-bold text-uppercase'>Apply for {job.position}</p>
              <Container className='d-flex justify-content-between'>
              <div>
              <p>Organization: {job.organization}</p> 
              <p>Salary Range: {job.min_salary}-{job.max_salary} BDT</p> 
              <p>Skills: {job.skills.join(', ')} </p> 
              <p>Experience Requirement: {job.experience} years </p> 
              <p>Application Duration: {job.startDate}-{job.endDate}</p> 
              </div>
              <div className='d-flex justify-content-center align-items-center'>
              <NavLink to={`/job_browse/${job._id}`} className='py-1 px-2 bg-success rounded text-white'><Card.Link className='py-1 px-2 bg-success rounded text-white'>Details</Card.Link></NavLink>
              <NavLink to={`/job_browse/${job._id}`} className='py-1 px-2 bg-danger rounded text-white'><Card.Link className='py-1 px-2 bg-success rounded text-white bg-danger'>Apply</Card.Link></NavLink>
              </div>
              </Container>
              </Card>
              </Col>
  )
}
