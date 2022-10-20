import userEvent from '@testing-library/user-event';
import React, { useRef, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Modal, Nav } from 'react-bootstrap'
import { GrChat } from 'react-icons/gr';
import { SiZwave } from 'react-icons/si';
import { MdOutlineWork } from 'react-icons/md';
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
    const formRef = useRef(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () =>{setShow(false)
        formRef.current.reset();
        setStartDate(new Date())
        setEndDate(new Date())
    }
    const handleShow = () => setShow(true);
    const [workDataArray, setWorkDataArray] = useState([]);
    const [workData, setWorkData] = useState({});

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
    const handleOnChangeWork = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...workData };
        newData[field] = value;
        setWorkData(newData);
        
        console.log(newData)

    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(data);

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
<Container className='bg-white'>  <form className='mt-3  py-3' onSubmit={handleSubmit}>
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
                <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
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
                <FloatingLabel
                    controlId="floatingInput"
                    label="Contact Person Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="contact" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* --------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Organization Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="organization" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------------- */}

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------------  */}
            </section>
            }    
                {job && <section className='bg-white'> 
                <FloatingLabel
                    controlId="floatingInput"
                    label="Contact Person Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="contact" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* --------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Organization Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="organization" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------------- */}

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------------  */}
            </section>
            }    
                          
                
                
                </form>
            </Container>
            

</section>
    </Container>

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
                     <Button variant="success" onClick={workSubmit}>
                        Confirm!!
                    </Button>
                  
                    </div>
            </form>
              
                </Modal.Body>
                {/* <Modal.Footer className='d-flex justify-content-between '>
                    <Button variant="success" onClick={workSubmit}>
                        Confirm!!
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel!!
                    </Button>
                </Modal.Footer> */}
            </Modal>
    </>
    
  )
}
