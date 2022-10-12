import { useEffect, useState } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import JobPost from './JobPost';
import SinglePagePdf from './SinglePagePdf';
export default function AppliedCandidates() {
    const [jobs, setJobs] = useState([])
    const [showT, setShowT] = useState(false);
    const [pdf, setPdf] = useState(null);
    const handleView=view=>{
      setPdf(view)
      handleShowT()
    }
    const handleCloseT = () => {
      setPdf(null)
      setShowT(false)};
    const handleShowT = () => setShowT(true)
     let ema='info@muspana.com'
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/employer_posted/${ema}`).then(res=>res.json()).then(data=>setJobs(data))
    }, [ema])
    let content=''
    console.log('asd',jobs)
    if(jobs.length<1){
    content=(<p className='text-center mt-5'>No Jobs Available</p>)
    }else{
      content=(<Row xs={1} md={2} className="">
      {jobs.reverse().map((job,index)=>(
          <JobPost show={false} key={index} job={job.jobData}/>
      ))}
      </Row>
      )
    }
  return (
    <>
    {showT && <Container className='text-center'>
             <h2> Candidate Resume </h2>
             <hr/>
             <SinglePagePdf pdf={"data:application/pdf;base64,"+pdf}/>
                 <Button variant="success" onClick={handleCloseT}>
                     Ok!!
                 </Button>
         </Container>}
    <Container className='mb-5'>
    <h2 className='my-4 text-center fw-bold my-5'> Browse  Available Jobs</h2>
   {content}
   </Container>
   <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>email</th>
          <th>Applied for</th>
          <th>Resume Pdf</th>
          </tr>
      </thead>
      <tbody>
      {jobs.map((m, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.email}</td>
                        <td>{m.jobData.position}</td>
                        {console.log("data:application/pdf;base64,"+m.pdf)}
                        <td><Button variant='primary' onClick={()=>handleView(m.pdf)}> View Resume</Button> </td>
                        {/* <td><SinglePagePdf pdf={"data:application/pdf;base64,"+m.pdf}/></td> */}
                        </tr>
                    ))}
      </tbody>
      </Table>
      
   </>
  )
}
