import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import JobPost from '../../Common/JobPost';
import useAuth from '../../Context/useAuth';
export default function MyJobs() {
// getting user
const { user } = useAuth()
    // local state
    const [jobs, setJobs] = useState([])
//    data load from db
useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/jobApply/${user.email}`).then(res => res.json()).then(data => setJobs(data)
        )
    }, [user.email])

  return (
    <Container data-aos="zoom-in" fluid className='py-3 my-5 allorderbg'>

    <h2 className='text-white fs-3 fw-bold text-center mb-3'> My Applicaitons</h2>
    {!jobs.length && <p className='green fs-3 fw-bold mb-3'> You have not applied for any jobs yet!!</p>}
       {/* applied jobs */}

    <Row Row xs={1} md={3} className="g-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
    {jobs.map((job,index)=>(
      <JobPost key={index} job={job.jobData}/>
  ))}
    </Row>
</Container>
  )
}
