import { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import TableData from '../../Common/TableData'

export default function AllForms() {
  // local states 
  const [contributer, setContributer] = useState([])
    const [courseDelete, setCourseDelete] = useState([])
    const [instructor, setInstructor] = useState([])
    const [recruitement, setRecruitement] = useState([])
    const [representative, setRepresentative] = useState([])
    const [demo, setDemo] = useState([])
    const [enterprice, setEnterprice] = useState([])
    const [scholarship, setScholarship] = useState([])
    const [choice, setChoice] = useState('choose form data ');
    const [tableData, settableData] = useState([]);
// loading data from db    // 
    useEffect(() => {
        fetch('https://api.unive.com.bd/api/contributer').then(res => res.json()).then(data => setContributer(data))
        fetch('https://api.unive.com.bd/api/instructor').then(res => res.json()).then(data => setInstructor(data))
        fetch('https://api.unive.com.bd/api/unive_recruitement').then(res => res.json()).then(data => setRecruitement(data))
        fetch('https://api.unive.com.bd/api/representative').then(res => res.json()).then(data => setRepresentative(data))
        fetch('https://api.unive.com.bd/api/demo').then(res => res.json()).then(data => setDemo(data))
        fetch('https://api.unive.com.bd/api/enterprice').then(res => res.json()).then(data => setEnterprice(data))
        fetch('https://api.unive.com.bd/api/scholarship').then(res => res.json()).then(data => setScholarship(data))
        fetch('https://api.unive.com.bd/api/course_delete').then(res => res.json()).then(data => setCourseDelete(data))
    }, [])
  //  function to handle select input
    function handleSelectChange(event) {
      setChoice(event.target.value);
      handleDATA(event.target.value)
    }
  //  function to change table data on  select input

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
  case 'courseDelete':
    settableData(courseDelete)
    break;
  default: settableData([])
}
    }
  return (
    <div>
      <Container className='my-5'>
   {/* select input */}
      <Form.Select className='ms-2' aria-label="Type of Form:" name='form_type' onChange={handleSelectChange} value={choice}>
                <option>Choose form data</option>
                <option value="contributer">become a contributer</option>
                <option value="instructor">become a instructor</option>
                <option value="recruitement">recruitement</option>
                <option value="representative">contact with representative</option>
                <option value="demo">for demo</option>
                <option value="enterprice">enterprise plan request</option>
                <option value="scholarship">for scholarship</option>
                <option value="courseDelete">course delete request</option>
              </Form.Select>
      </Container>
{/* tabular display */}
     <TableData tableData={tableData} choice={choice}></TableData>
    </div>
  )
}
