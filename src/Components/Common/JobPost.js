import axios from 'axios';
import moment from 'moment';
import { Button, Card, Col, Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import useAuth from './../Context/useAuth';
export default function JobPost({job,show=true}) {
  const {startDate}=job
 
  const {user,admin}=useAuth()

  const deleteJob=(id)=>{
    axios.delete(`https://fierce-woodland-01411.herokuapp.com/api/delete_job/${id}`).then(res=>res.data.acknowledged? window.location.reload(true):console.log('error at delete'))
  }
  return (
    <Col>
            <Card body className='rounded mt-5 card-shadow' >
            {moment.duration(moment(new Date()).diff(moment(startDate))).asHours()<=72 && <Badge bg="primary">New</Badge>}
              <p className='text-center fw-bold text-uppercase jobText'>{job.imgLink &&<img src={job.imgLink} alt='logo ' className='img-fluid  me-3 pb-2' width={35} heigth={35}/>}Looking For {job.position}</p>
              <Container className=''>
              <section className='d-flex jobText text-center justify-content-between align-items-center'>
                <div className=''>
                <p><span className='fw-bold jobText'>৳</span> {job.min_salary}-{job.max_salary} <div></div><span className='text-muted'>Salary Range</span></p>
                
                </div>
                <div className='jobText'>
                <p>{job.experience} years <br/><span className='text-muted'>Experience</span></p>
                </div>
                  </section>
              <section className='jobText'>
              <p>{job.jd.slice(0,100)+'....'}</p>
              <div  className='d-flex mb-2 justify-content-between'>
              {job.skills.slice(0,3).map((skill,index)=>(
    <span key={index} className=' ms-1 text-center skill-item rounded m p-1 '> {skill}</span>
))}    </div>
              </section>
              {show &&
              <div className='d-flex justify-content-around'>
              {/* <NavLink to={`/job_browse/${job._id}`} className='p-2 bg-success text-center rounded text-white'><Card.Link className='py-1 px-2  bg-success rounded text-center text-white'>View Details</Card.Link></NavLink> */}
              <NavLink to={`/jobs/${job._id}`}> <Button className='p-2 viewDetails jobText' >View Details <img src={'ar'} alt="" /></Button></NavLink>
              {admin && <NavLink to={`/dashboard/edit_job/${job._id}`}> <Button className='p-2 jobText' variant="outline-secondary">Edit Post <img src={'ar'} alt="" /></Button></NavLink>}
              {admin && <Button className='p-2 jobText' variant="outline-danger" onClick={()=>deleteJob(job._id)}>Delete Post <img src={'ar'} alt="" /></Button>}
              </div>}
              </Container>
              </Card>
              </Col>
  )
}
