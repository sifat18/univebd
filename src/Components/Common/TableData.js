import React from 'react'
import { Table,Form } from 'react-bootstrap'
import { useState } from 'react';
import { axios } from 'axios';

export default function TableData({tableData,choice}) {
  // const [status, setStatus] = useState('Change Status ');
  function handleSelectChange(event,id,choice) {
    // setStatus(event.target.value);
    console.log(event.target.value)

    switch(choice){
      case 'contributer':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/contributer/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'instructor':
        console.log('instructor')
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/instructor/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'recruitement':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/unive_recruitement/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'representative':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/representative/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'demo':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/demo/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'enterprice':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/enterprice/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
        break;
      case 'scholarship':
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/scholarship/edit/${id}?choice=${event.target.value}`).then(res => res.data ? console.log('dsane') : '')
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
       { choice!=="representative" && choice!=="instructor" && choice!=="scholarship" && choice!=="contributer"  && <th>Organization name</th>}
          <th>Email</th>
          <th>Phone</th>
          {choice==="instructor"  && <th>Subject</th>}
          {choice==="contributer"  && <th>Subject</th>}
          {choice==="scholarship"  &&<th>Education Qualification</th>}
          {choice==="scholarship"  &&<th>Need</th>}
          {choice==="scholarship"  &&<th>Platform learn</th>}
          {choice==="recruitement"  &&<th>Candidate Requirement</th>}
          {choice==="recruitement"  &&<th>Additional_information</th>}
          <th>Status</th>
          <th>Status Change</th>

        </tr>
      </thead>
      <tbody>
      {tableData.map((m, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.FullName}</td>
       { choice!=="representative" && choice!=="instructor" && choice!=="scholarship"  && choice!=="contributer"  && <td>{m.company}</td>}
                        <td>{m.email}</td>
                        <td>{m.PhoneNumber}</td>
                        {choice==="instructor"  && <td>{m.subject}</td>}
                        {choice==="contributer"  && <td>{m.subject}</td>}
                        {choice==="recruitement"  && <td>{m.candidateRequirement}</td>}
                        {choice==="recruitement"  && <td>{m.additional_information}</td>}
                        {choice==="scholarship"  &&<td>{m.edu_qualification}</td>}
          {choice==="scholarship"  &&<td>{m.scholarship_need}</td>}
          {choice==="scholarship"  &&<td>{m.platform_learn}</td>}
          <td className={m.status==="pending" && 'text-danger'}>{m.status}</td>
          <td>
            <Form.Select className='ms-2' aria-label="Type of Form:" name='form_type' onChange={handleSelectChange} >
                <option>Choose status</option>
                <option value="pending">pending</option>
                <option value="Reviewed">Reviewed</option>
              </Form.Select></td>
                      </tr>
                    ))}
      </tbody>
    </Table>
    </div>
  )
}
