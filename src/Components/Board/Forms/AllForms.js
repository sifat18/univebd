import React, { useEffect, useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import TableData from '../../Common/TableData'

export default function AllForms() {
    const [contributer, setContributer] = useState([])
    const [instructor, setInstructor] = useState([])
    const [recruitement, setRecruitement] = useState([])
    const [representative, setRepresentative] = useState([])
    const [demo, setDemo] = useState([])
    const [enterprice, setEnterprice] = useState([])
    const [scholarship, setScholarship] = useState([])
    useEffect(() => {
        // fierce-woodland-01411.herokuapp.com
        fetch('https://fierce-woodland-01411.herokuapp.com/api/contributer').then(res => res.json()).then(data => setContributer(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/instructor').then(res => res.json()).then(data => setInstructor(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/unive_recruitement').then(res => res.json()).then(data => setRecruitement(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/representative').then(res => res.json()).then(data => setRepresentative(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/demo').then(res => res.json()).then(data => setDemo(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/enterprice').then(res => res.json()).then(data => setEnterprice(data))
        fetch('https://fierce-woodland-01411.herokuapp.com/api/scholarship').then(res => res.json()).then(data => setScholarship(data))
    }, [])
    const [choice, setChoice] = useState('choose form data ');
    const [tableData, settableData] = useState([]);
    function handleSelectChange(event) {
      setChoice(event.target.value);
      handleDATA(event.target.value)
    }
    const handleDATA=(data)=>{
switch(data){
  case 'contributer':
    settableData(contributer)
    break;
  case 'instructor':
    console.log('instructor')
    settableData(instructor)
    break;
  case 'recruitement':
    settableData(recruitement)
    break;
  case 'representative':
    settableData(representative)
    break;
  case 'demo':
    settableData(demo)
    break;
  case 'enterprice':
    settableData(enterprice)
    break;
  case 'scholarship':
    settableData(scholarship)
    break;
  default: settableData([])
}
    }
  return (
    <div>
      <Container className='my-5'>
      <Form.Select className='ms-2' aria-label="Type of Form:" name='form_type' onChange={handleSelectChange} value={choice}>
                <option>Choose form data</option>
                <option value="contributer">become a contributer</option>
                <option value="instructor">become a instructor</option>
                <option value="recruitement">recruitement</option>
                <option value="representative">contact with representative</option>
                <option value="demo">for demo</option>
                <option value="enterprice">enterprise plan request</option>
                <option value="scholarship">for scholarship</option>
              </Form.Select>
      </Container>

     <TableData tableData={tableData} choice={choice}></TableData>
    </div>
  )
}
