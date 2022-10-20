import userEvent from '@testing-library/user-event';
import React, { useRef, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Nav, Row } from 'react-bootstrap'
import { GrChat } from 'react-icons/gr';
import { SiZwave } from 'react-icons/si';
import { MdOutlineWork } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { BsBuilding } from 'react-icons/bs';
import moment from 'moment/moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ProfileEdit() {
    const [data, setData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const [skills, setSkills] = useState([]);

    const formRef = useRef(null);
    const formRef2 = useRef(null);
    const formRef3 = useRef(null);
    const [type, setType] = useState('permanent');
    const [level, setLevel] = useState('Junior');
    const [industry, setIndustry] = useState('');
    const [size, setSize] = useState('');
    function handleSelectChange(event) {
        setType(event.target.value);
      }
    function handleSelectChange2(event) {
        setLevel(event.target.value);
      }
    function handleSelectChange3(event) {
        setIndustry(event.target.value);
      }
    function handleSelectChange4(event) {
        setSize(event.target.value);
      }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showE, setShowE] = useState(false);
    const handleCloseE = () =>{setShowE(false)
        formRef2.current.reset();
        setStartDate(new Date())
        setEndDate(new Date())
    }
    const handleShowE = () => setShowE(true);
    const [show, setShow] = useState(false);
    const handleClose = () =>{setShow(false)
        formRef.current.reset();
        setStartDate(new Date())
        setEndDate(new Date())
    }
    const handlekeyDown=(e)=>{
        if(e.key!=="Enter") return
        const value=e.target.value
        if(!value.trim()) return
        setSkills([...skills,value])
        e.target.value=''
        }
        const removeSkill=(item)=>{
            setSkills(skills.filter((el,i)=> i!==item))
        }
    const handleShow = () => setShow(true);
    const [workDataArray, setWorkDataArray] = useState([]);
    const [workData, setWorkData] = useState({});
    const [eduDataArray, setEduDataArray] = useState([]);
    const [eduData, setEduData] = useState({});

    const workSubmit=(e)=>{
e.preventDefault()
let newWork={...workData}
newWork.startDate=moment(startDate).format('L') 
newWork.endDate=moment(endDate).format('L') 
setWorkDataArray([...workDataArray,newWork])
console.log(workDataArray)
console.log([...workDataArray,newWork])

handleClose()
    }
    const eduSubmit=(e)=>{
e.preventDefault()
let newEdu={...eduData}
newEdu.startDate=moment(startDate).format('L') 
newEdu.endDate=moment(endDate).format('L') 
setEduDataArray([...eduDataArray,newEdu])
console.log(eduDataArray)
console.log([...eduDataArray,newEdu])

handleCloseE()
    }
    const handleOnChangeWork = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...workData };
        newData[field] = value;
        setWorkData(newData);
        
        console.log(newData)

    }
    const handleOnChangeEdu = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...eduData };
        newData[field] = value;
        setEduData(newData);
        
        console.log(newData)

    }
    const handleSubmit = e => {
        e.preventDefault()
        let newData={...data};
        newData.work=workDataArray
        newData.education=eduDataArray
        newData.typeOfJob=type
        newData.level=level
        newData.industry=industry
        newData.size=size
        newData.skills=skills
        console.log(newData)
        formRef3.current.reset();
        // axios.post(`https://fierce-woodland-01411.herokuapp.com/api/employerProfile`, data).then(res => res.data ? handleShowT() : '')

    }
    const [about, setAbout] = useState(true)
    const [work, setWork] = useState(false)
    const [education, setEducation] = useState(false)
    const [job, setJob] = useState(false)
    const getAll = data => {
        console.log(data);
        switch(data){
            case 'about':
                setAbout(true)
                setWork(false)
                setEducation(false)
                setJob(false)
              break;
            case 'work':
                setAbout(false)
                setWork(true)
                setEducation(false)
                setJob(false)
              break;
            case 'education':
                setAbout(false)
                setWork(false)
                setEducation(true)
                setJob(false)
                break;
            case 'job':
                setAbout(false)
                setWork(false)
                setEducation(false)
                setJob(true)
              break;
            
            default:
            setAbout(true)
            setWork(false)
            setEducation(false)
            setJob(false)
    }}
  return (
    <>
    <Container fluid className='bg-white py-3'>
         <Nav justify variant="tabs" defaultActiveKey="#about">
                        <Nav.Item>
                            <Nav.Link href="#about" onClick={() => getAll('about')}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#work" onClick={() => getAll('work')}>Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#education" onClick={() => getAll('education')}>
                            Education
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#job" onClick={() => getAll('job')}>Jobs</Nav.Link>
                        </Nav.Item>
                    </Nav>

<section className='my-2'>
<Container className='bg-white'>  <form ref={formRef3} className='mt-3  py-3' onSubmit={handleSubmit}>
{about && <section>
               <GrChat/> 
               <p className='fs-6 fw-bold'>About you</p>
<p> Tell others a bit more about you and your passion.</p>
  <Form.Label className='fw-bold'>First Name</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="first_name" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* --------- */}
                <Form.Label className='fw-bold'>Last Name</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="last_name" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----------- */}
                <Form.Label className='fw-bold'>Username</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="username"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="username" className="text-start" placeholder='janedow' onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------------- */}
                <Form.Label className='fw-bold'>Bio</Form.Label>

                <FloatingLabel controlId="floatingTextarea2" label="bio">
    <Form.Control
      as="textarea"
      required
      onChange={handleOnChange}
      className='text-start'
      name="bio" placeholder='bio'
      style={{ height: '100px' }}
    />
                </FloatingLabel>

                {/* ------------- */}

                <Form.Label className='fw-bold'>Current Role</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Current Role"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="Current_Role" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------------  */}
                
                <Form.Label className='fw-bold'>Employer</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employer"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="employer" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                <hr />
                {/*------------  */}
                <SiZwave />
               <p className='fs-6 fw-bold'>Social Profiles</p>
<p> Link your social profile(s) to show off your work.</p>
                <Form.Label className='fw-bold'>LinkedIn
</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="LinkedIn"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="LinkedIn" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ---------------- */}
                <Form.Label className='fw-bold'>Website
</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Website"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="website" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                </section>}
                
                {work && <section className='bg-white'> 
                <MdOutlineWork/> 
                <div className="d-flex justify-content-between align-items-center">
               <p className='fs-6 fw-bold pt-2'>Work Experience</p>
                   <Button onClick={handleShow} variant="outline-primary" className='w-75 border p-2' size="lg">
        Add Experience
      </Button>
               </div>
            </section>
            }    
                {education && <section className='bg-white'> 
                <FaUserGraduate/> 
                <div className="d-flex justify-content-between align-items-center">
               <p className='fs-6 fw-bold pt-2'>Education</p>
                   <Button onClick={handleShowE} variant="outline-primary" className='w-75 border p-2' size="lg">
        Add Education
      </Button>
               </div>
            </section>
            }    
                {job && <section className='bg-white'> 
                <Row>
                    <Col  xs={12} md={3}>
                    <BsBuilding className=' fs-4'/>
                    <p className='fw-bold fs-5'>Company Information</p>
                    <p>What type of company would you like to work at?</p>
                    </Col>
                    <Col xs={12} md={8}>
               
               {/* --------- */}
               <Form.Label className='fw-bold'>Role Title</Form.Label>
               <FloatingLabel
                   controlId="floatingInput"
                   label="Role"
                   className="mt-2 mb-3 text-start"
               >
                   <Form.Control required type="text" name="role" className="text-start" placeholder="Site Engineer" onChange={handleOnChange} />
               </FloatingLabel>
               <Form.Label className='fw-bold'>Domain of Expertise</Form.Label>
               <FloatingLabel
                   controlId="floatingInput"
                   label="Domain of Expertise"
                   className="mt-2 mb-3 text-start"
               >
                   <Form.Control required type="text" name="domain" className="text-start" placeholder="Site Engineer" onChange={handleOnChange} />
               </FloatingLabel>
               {/* ----------- */}
               <Form.Label className='fw-bold'>Type of job</Form.Label>
              
               <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange} value={type}>
                <option value="permanent">Permanent</option>
                <option value="contractor">Contractor</option>
              </Form.Select>
               {/* ------ */}
               <Form.Label className='fw-bold'>Seniority level</Form.Label>
              
              <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange2} value={level}>
               <option value="Entry_level">Entry_level</option>
               <option value="Junior">Junior</option>
               <option value="mid">Mid-Level</option>
               <option value="Senior">Senior</option>
               <option value="Expert">Expert</option>
             </Form.Select>
               {/* ------Skills------- */}
               <Form.Label className='fw-bold'>Skills</Form.Label>
             
               <FloatingLabel
                    controlId="floatingInput"
                    label="Add Required Skills [Press Enter After Each Skill]"
                    className="mt-2 mb-3 text-start "
                >
                {/* <div className='tag-container'> */}
       
  <Form.Control onKeyDown={handlekeyDown}  type="text" className="text-start" placeholder="xyz"  />
    {/* <input   /> */}
    {skills.length >0 &&
  <div className='skills-container pt-2'>
    {skills.map((skill,index)=>(
<div key={index} className='skill-item '>
    <span className='text'> {skill}</span>
    <span className='close' onClick={()=>removeSkill(index)}>x</span>
</div>
    ))}
    </div>
    }
    </FloatingLabel>
     
 {/* ---------apply date */}
 <Form.Label className='fw-bold'>Salary Expection</Form.Label>

 <FloatingLabel
                    controlId="floatingInput"
                    label="Salary Expection"
                    className="mt-2 mb-3 text-start"
                >
                     <Form.Control type="number" required className="text-start" placeholder="50000" name="salary_expectation" onChange={handleOnChange} />
                     
                     </FloatingLabel>
                    </Col>
                    </Row>
 <hr />
 <Row>
                    <Col  xs={12} md={3}>
                    <BsBuilding className=' fs-4'/>
                    <p className='fw-bold fs-5'>Job information</p>
                    <p>What does your ideal job look like?</p>
                    </Col>
                    <Col xs={12} md={8}>
               
               {/* --------- */}
               
               <Form.Label className='fw-bold'>Industry</Form.Label>
              
               <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange3} value={industry}>
                <option></option>
                <option value="IT">IT/Computer Science</option>
                <option value="Education">Education</option>
                <option value="Video_Streaming">Video Streaming</option>
                <option value="Electrical_engineering"> Electrical Engineering</option>
                <option value="Mechanical_engineering"> Mechanical Engineering</option>
                <option value="Civil_engineering"> Civil Engineering</option>
                <option value="Comunication">Comunication</option>
                <option value="Consulting">Consulting</option>
                <option value="Consumer_goods">Consumer Goods</option>
                <option value="Energy">Energy</option>
                <option value="Finance">Finance</option>
                <option value="Government">Government</option>
                <option value="HealthCare">HealthCare</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Insurance">Insurance</option>
                <option value="Media">Media</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media">Media</option>
                <option value="Real_estate">Real Estate</option>
                <option value="Retail">Retail</option>
                <option value="Technology">Technology</option>
                <option value="Telecom">Telecom</option>
                <option value="Transportation">Transportation</option>
                <option value="Research">Research</option>

              </Form.Select>
               <Form.Label className='fw-bold'>Company Size</Form.Label>
              
               <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange4} value={size}>
                <option></option>
                <option value="1-20">1-20</option>
                <option value="21-100">21-100</option>
                <option value="101-200">101-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1000+">1000+</option>
              </Form.Select>
                                  </Col>
                    </Row>         
            </section>
         
         }    
  {job &&  <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>}
                          
                
                
                </form>
            </Container>
            

</section>
    </Container>
{/* for work */}
    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add your Work Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
              <form ref={formRef} className='py-2' onSubmit={workSubmit}>
               
                {/* --------- */}
                <Form.Label className='fw-bold'>Role Title</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Role"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control required type="text" name="role" className="text-start" placeholder="Site Engineer" onChange={handleOnChangeWork} />
                </FloatingLabel>
                {/* ----------- */}
                <Form.Label className='fw-bold'>Employer</Form.Label>
            
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employer"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" required className="text-start" placeholder="Employer" name="employer" onChange={handleOnChangeWork} />
                </FloatingLabel>
                {/* ------ */}
                <Form.Label className='fw-bold'>Employer Url</Form.Label>
            
            <FloatingLabel
                controlId="floatingInput"
                label="Employer URL"
                className="mt-2 mb-3 text-start"
            >
                <Form.Control type="text" required className="text-start" placeholder="Employer" name="employer_url" onChange={handleOnChangeWork} />
            </FloatingLabel>  
                {/* ------Industry------- */}
                <Form.Label className='fw-bold'>Industry</Form.Label>
            
            <FloatingLabel
                controlId="floatingInput"
                label="Industry"
                className="mt-2 mb-3 text-start"
            >
                <Form.Control type="text" required className="text-start" placeholder="Industry" name="industry" onChange={handleOnChangeWork} />
                </FloatingLabel>
      
  {/* ---------apply date */}
  <div className='d-flex '>
    <p className='w-100'>Start date
  <DatePicker className='w-100' required selected={startDate} onChange={(date) => setStartDate(date)} />
  </p>
  <p className='w-100'>End date
  <DatePicker className='w-100' required selected={endDate} onChange={(date) => setEndDate(date)} />
  </p></div>
  <hr />
  <div className="d-flex justify-content-between">
  <Button variant="secondary" onClick={handleClose}>
                        Cancel!!
                    </Button>
                     <Button variant="success" onClick={handleClose}>
                        Confirm!!
                    </Button>
                  
                    </div>
            </form>
              
                </Modal.Body>
          
            </Modal>
{/* for education */}
    <Modal show={showE} onHide={handleCloseE}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Education</Modal.Title>
                </Modal.Header>
                <Modal.Body>
              <form ref={formRef2} className='py-2' onSubmit={eduSubmit}>
               
                {/* --------- */}
                <Form.Label className='fw-bold'>Degree</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Degree"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control required type="text" name="degree" className="text-start" placeholder="Degree" onChange={handleOnChangeEdu} />
                </FloatingLabel>
                {/* ----------- */}
                <Form.Label className='fw-bold'>Major</Form.Label>
            
                <FloatingLabel
                    controlId="floatingInput"
                    label="Major"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" required className="text-start" placeholder="Major" name="major" onChange={handleOnChangeEdu} />
                </FloatingLabel>
                {/* ------ */}
                <Form.Label className='fw-bold'>School Name</Form.Label>
            
            <FloatingLabel
                controlId="floatingInput"
                label="School Name"
                className="mt-2 mb-3 text-start"
            >
                <Form.Control type="text" required className="text-start" placeholder="school" name="school" onChange={handleOnChangeEdu} />
            </FloatingLabel>  
                {/* ------Industry------- */}
                 
  {/* ---------apply date */}
  <div className='d-flex '>
    <p className='w-100'>Completion date
  <DatePicker className='w-100' required selected={startDate} onChange={(date) => setStartDate(date)} />
  </p>
  <p className='w-100'>End date
  <DatePicker className='w-100' required selected={endDate} onChange={(date) => setEndDate(date)} />
  </p></div>
  <hr />
  <div className="d-flex justify-content-between">
  <Button variant="secondary" onClick={handleCloseE}>
                        Cancel!!
                    </Button>
                     <Button variant="success" onClick={eduSubmit}>
                        Confirm!!
                    </Button>
                  
                    </div>
            </form>
              
                </Modal.Body>
          
            </Modal>
    </>
    
  )
}
