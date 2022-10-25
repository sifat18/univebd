import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import JobPost from './JobPost';
import SinglePagePdf from './SinglePagePdf';
export default function AppliedCandidates() {
  // modal display function and variable
  const [show, setShow] = useState(false);
  const handleClose = () =>  setShow(false);
  const handleShow = () => setShow(true);
        //local state 
    const [jobs, setJobs] = useState([])
    const [pdf, setPdf] = useState(null);
//  function to view pdf data
    const handleView=view=>{
      setPdf(view)
      handleShowT()
    }
    // getting user
    const { user } = useAuth()
// modal2 display function and variable
    const [showT, setShowT] = useState(false);
    const handleCloseT = () => {
      setPdf(null)
      setShowT(false)};
    const handleShowT = () => setShowT(true)
    //  laoding data based on job poster email
    useEffect(() => {
        fetch(`https://api.unive.com.bd/api/employer_posted/${user.email}`).then(res=>res.json()).then(data=>setJobs(data))
    }, [user])
    let content=''
    // console.log('asd',jobs)
  // to display content
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
// function to handle the status 
    function handleSelectChange(event,id) {
      // setStatus(event.target.value);
      // console.log(event.target.value,id,)
      let status
  
          status=event.target.value
          axios.patch(`https://api.unive.com.bd/api/jobApply/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
      }
  return (
    <>
    {/* pdf view candidates */}
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
   {/* applied candidates */}
   <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>email</th>
          <th>Applied for</th>
          <th>Resume Pdf</th>
          <th>Status Change</th> </tr>
      </thead>
      <tbody>
      {jobs.map((m, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.email}</td>
                        <td>{m.jobData.position}</td>
                        <td><Button variant='primary' onClick={()=>handleView(m.pdf)}> View Resume</Button> </td>
          <td>
            <Form.Select defaultValue={m.status} className='ms-2' aria-label="Type of Form:" name='form_type' onChange={(e)=>handleSelectChange(e,m._id)} >
                <option>Choose status</option>
                <option value="pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Nominated for Test">Nominated for Test</option>
                <option value="Nominated for Interview">Nominated for Interview</option>
                <option value="Selected">Selected</option>
              </Form.Select></td>
                      </tr>
                    
                    ))}
      </tbody>
      </Table>
      {/* modal for status chagne */}
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Candidate Status change is successful.</Modal.Body>
                <Modal.Footer>
        
                    <Button variant="info" onClick={handleClose}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
   </>
  )
}
