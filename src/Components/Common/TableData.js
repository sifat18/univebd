import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

export default function TableData({tableData,choice}) {
  const [show, setShow] = useState(false);
const handleClose = () =>  setShow(false);
    const handleShow = () => setShow(true);
  
  function handleSelectChange(event,id) {
    // setStatus(event.target.value);
    console.log(event.target.value,id,choice)
    let status

    switch(choice){
      case 'contributer':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/contributer/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
        break;
      case 'instructor':
        status=event.target.value
        console.log('instructor')
        axios.put(`https://api.unive.com.bd/api/instructor/edit/${id}`,{status}).then(res => res.data ?handleShow() : '')
        break;
      case 'recruitement':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/unive_recruitement/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
        break;
      case 'representative':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/representative/edit/${id}`,{status}).then(res => res.data ?handleShow() : '')
        break;
      case 'demo':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/demo/edit/${id}`,{status}).then(res => res.data ?handleShow() : '')
        break;
      case 'enterprice':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/enterprice/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
        break;
      case 'scholarship':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/scholarship/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
        break;
      case 'courseDelete':
        status=event.target.value
        axios.put(`https://api.unive.com.bd/api/course_delete/edit/${id}`,{status}).then(res => res.data ? handleShow() : '')
        break;
      default: 
    }
  }
  return (
    
    <div>
         <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
       { choice!=="representative" && choice!=="instructor" && choice!=="scholarship" && choice!=="contributer" && choice!=="courseDelete"  && <th>Organization name</th>}
          <th>Email</th>
          <th>Phone</th>
          {choice==="instructor"  && <th>Subject</th>}
          {choice==="contributer"  && <th>Subject</th>}
          {choice==="scholarship"  &&<th>Education Qualification</th>}
          {choice==="scholarship"  &&<th>Need</th>}
          {choice==="scholarship"  &&<th>Platform learn</th>}
          {choice==="recruitement"  &&<th>Candidate Requirement</th>}
          {choice==="recruitement"  &&<th>Additional_information</th>}
          {choice==="courseDelete"  &&<th>course to deleted</th>}
          <th>Status Change</th>

        </tr>
      </thead>
      <tbody>
      {tableData.map((m, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.FullName}</td>
       { choice!=="representative" && choice!=="instructor" && choice!=="scholarship"  && choice!=="contributer" &&choice!=="courseDelete"  && <td>{m.company}</td>}
                        <td>{m.email}</td>
                        <td>{m.PhoneNumber}</td>
          {choice==="courseDelete"  &&<th>{m.course}</th>}

                        {choice==="instructor"  && <td>{m.subject}</td>}
                        {choice==="contributer"  && <td>{m.subject}</td>}
                        {choice==="recruitement"  && <td>{m.candidateRequirement}</td>}
                        {choice==="recruitement"  && <td>{m.additional_information}</td>}
                        {choice==="scholarship"  &&<td>{m.edu_qualification}</td>}
          {choice==="scholarship"  &&<td>{m.scholarship_need}</td>}
          {choice==="scholarship"  &&<td>{m.platform_learn}</td>}
          <td>
            <Form.Select defaultValue={m.status} className='ms-2' aria-label="Type of Form:" name='form_type' onChange={(e)=>handleSelectChange(e,m._id)} >
                <option>Choose status</option>
                <option value="pending">pending</option>
                <option value="Reviewed">Reviewed</option>
              </Form.Select></td>
                      </tr>
                    ))}
      </tbody>
    </Table>
       {/* modal after submit form */}
       <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Form Status change is successful.</Modal.Body>
                <Modal.Footer>
        
                    <Button variant="info" onClick={handleClose}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}
