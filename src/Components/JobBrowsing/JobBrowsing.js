import React, { useEffect } from 'react'
import './jobbrowse.css'
import pic6 from '../images/logos/logo.png'

import { Container } from 'react-bootstrap';
import { useState } from 'react';
import JobPost from '../Common/JobPost';
export default function JobBrowsing() {
  const [jobs, setJobs] = useState([])
useEffect(() => {
    fetch('https://fierce-woodland-01411.herokuapp.com/api/jobpost').then(res=>res.json()).then(data=>setJobs(data))
}, [])
console.log(jobs)
    return (
    <>
      <Container fluid className='job-bg'>
      <Container data-aos="fade-left" className='d-flex flex-column justify-content-center align-items-center  mt-5 pt-2'>
                <img data-aos="fade-left" src={pic6} alt="Logo" className="logo-img img-fluid" height='250' width='250' />              
                <h2 data-aos="fade-right" className='text-bg text-white'>Are you stressed about your career?</h2>
                <p data-aos="fade-up" className='text-white fs-4 '>We are here to help you grow </p>
                <p data-aos="fade-down" className='text-white fs-4 '>It's an all in one platform where you can learn and find your dream job</p>
            </Container>
        </Container>  

        <Container>
{jobs.map((job,index)=>{
    <JobPost key={index} job={job}/>
})}
        </Container>
    </>
  )
}
