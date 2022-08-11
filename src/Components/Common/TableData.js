import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableData({tableData,choice}) {
  console.log(tableData)
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
                      </tr>
                    ))}
      </tbody>
    </Table>
    </div>
  )
}
