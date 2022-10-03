import moment from 'moment';
import { Card, Col, Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
export default function JobPost({job}) {
  const {startDate}=job
 
  return (
    <Col>
            <Card body className='rounded mt-5 card-shadow' >
            {moment.duration(moment(new Date()).diff(moment(startDate))).asHours()<=72 && <Badge bg="primary">New</Badge>}
              <p className='text-center fs-5 fw-bold text-uppercase'>Looking For {job.position}</p>
              <Container className=''>
              <section className='d-flex  w-75 text-center justify-content-between align-items-center'>
                <div className=''>
                <p><span className='fw-bold fs-3'>৳</span> {job.min_salary}-{job.max_salary} <div></div><span className='text-muted'>Salary Range</span></p>
                
                </div>
                <div className='mt-2'>
                <p>{job.experience} years <br/><span className='text-muted'>Experience</span></p>
                </div>
                  </section>
              <section className='mt-3 mb-4'>
              <p>{job.jd.slice(0,100)+'....'}</p>
              <div  className='mb-3'>
              {job.skills.map((skill,index)=>(
    <span key={index} className='text skill-item mt-2 me-2 '> {skill}</span>
))}    </div>
              </section>
              <NavLink to={`/job_browse/${job._id}`} className='py-1  px-2 bg-success rounded text-white'><Card.Link className='py-1 px-2  bg-success rounded text-white'>View Details</Card.Link></NavLink>
              
              </Container>
              </Card>
              </Col>
  )
}
