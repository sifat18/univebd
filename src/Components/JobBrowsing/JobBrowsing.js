import { useEffect } from 'react'
import './jobbrowse.css'

import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import Companies from '../Common/Companies'
import JobPost from '../Common/JobPost'
import Footer from '../Footer/Footer'
import Header from './../Header/Header'

export default function JobBrowsing() {
  const [jobs, setJobs] = useState([])
useEffect(() => {
    fetch('https://fierce-woodland-01411.herokuapp.com/api/jobpost').then(res=>res.json()).then(data=>setJobs(data))
}, [])
let content=''
console.log('asd',jobs)
if(jobs.length<1){
content=(<p className='text-center mt-5'>No Jobs Available</p>)
}else{
  content=(<Row xs={1} md={2} className="">
  {jobs.map((job,index)=>(
      <JobPost key={index} job={job}/>
  ))}
  </Row>
  )
}

return (
    <>
    <Header/>

       <Container fluid className='job-bg'>
       <Container>
      <Row className='my-5 header-job  rounded d-flex justify-content-around'>
<Col xs={12} md={5} className='py-5  ps-5 rounded'>
  <h2 className='fs-1 fw-bold'>Find the Best Available Jobs Near You</h2>
  <p className='fs-5 my-3 '>It takes just one job to develop a successful relationship that can propel your career forward.</p>
   </Col>
   
<Col xs={12} md={5}  className='py-5 w-50 text-white my-2  px-5 header-job-col   rounded'>

<h2>Professionals on Unive Rate Clients {['e','e','e','e','e'].map(i=>(
<span className='text-warning'><AiTwotoneStar/></span>
)) } <span span className='text-warning'><BsStarHalf/></span></h2>
</Col>
      </Row>

    </Container>
    <hr className='d-flex'/>
    <div className='text-center fs-3'>Trusted By</div> <Companies className='my-5'/>
    <hr/>
       <Container>
        <h2 className='my-4 text-center fw-bold'> Browse  Available Jobs</h2>
       {content}
       </Container>
      
      </Container>
      <Footer/>

    </>
  )
}
