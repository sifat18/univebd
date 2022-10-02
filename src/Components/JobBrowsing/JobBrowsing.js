import React, { useEffect } from 'react'
import './jobbrowse.css'
import vid1 from '../images/job/jbg.mp4'
import vid2 from '../images/job/v2.mp4'
import vid3 from '../images/job/v3.mp4'
import vid4 from '../images/job/v4.mp4'
import vid5 from '../images/job/v5.mp4'

import { Container, Ratio, Row } from 'react-bootstrap';
import { useState } from 'react';
import JobPost from '../Common/JobPost';
import Header from './../Header/Header';
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
       {content}
       </Container>
       {/* <Container data-aos="fade-left" className='bg-job d-flex flex-column justify-content-center align-items-center   '>
       <Ratio aspectRatio="16x9">
            <video loop="true" autoplay="autoplay" muted >
                    <source src={vid4} type='video/mp4' />
                </video>        
                
                </Ratio>  
                {/* <img data-aos="fade-left" src={pic6} alt="Logo" className="logo-img img-fluid" height='250' width='250' />               */}
                {/* <h2 data-aos="fade-right" className='text-bg text-white'>Are you stressed about your career?</h2>
                <p data-aos="fade-up" className='text-white fs-4 '>We are here to help you grow </p>
                <p data-aos="fade-down" className='text-white fs-4 '>It's an all in one platform where you can learn and find your dream job</p> */}
            {/* </Container> */} 
      </Container>
      {/* <Container fluid className='job-bg'>
    
        </Container>   */}


    </>
  )
}
