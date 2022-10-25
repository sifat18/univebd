import { useEffect } from 'react'
import './jobbrowse.css'

import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Companies from '../Common/Companies'
import JobPost from '../Common/JobPost'
import Footer from '../Footer/Footer'
import Header from './../Header/Header'

export default function JobBrowsing() {
  const [jobs, setJobs] = useState([])
useEffect(() => {
    fetch('https://api.unive.com.bd/api/jobpost').then(res=>res.json()).then(data=>setJobs(data))
}, [])
let content=''
if(jobs.length<1){
content=(<p className='text-center mt-5'>No Jobs Available</p>)
}else{
  content=(<Row xs={1} md={3} className="">
  {jobs.reverse().map((job,index)=>(
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
        <h2 className=' text-center fw-bold '> Jobs</h2>
       {content}
       </Container>
     
       <Container>
      
    </Container>
    <hr className=' mt-5'/>
    <div className='text-center fs-3'>Trusted By</div> <Companies className='my-5'/>
    <hr/>
      
      </Container>
      <Footer/>

    </>
  )
}
