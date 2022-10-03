import { useEffect } from 'react'
import './jobbrowse.css'

import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import JobPost from '../Common/JobPost'
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
       {content}
       </Container>
      
      </Container>
      

    </>
  )
}
