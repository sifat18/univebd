import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Nav, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsBuilding } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { GrChat } from 'react-icons/gr';
import { MdOutlineWork } from 'react-icons/md';
import { SiZwave } from 'react-icons/si';
import { useParams } from 'react-router-dom';
import useAuth from './../Context/useAuth';
export default function ProfileEdit() {
    const [data, setData] = useState({});
    // function to handle common  input field changes
    const { email } = useParams()
    const [profile, setProfile] = useState({})
  
console.log(profile)

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    // getting user 
    const {user}=useAuth()
    // local variable to store skills
    const [skills, setSkills] = useState([]);
// modal display for profile creation
const [showFinal, setshowFinal] = useState(false);
//    modal close 
const handleCloseFinal = () => {
    setShow(false)
    window.location.reload(true);
};

const handleShowFinal = () => setshowFinal(true);
    // form references to clear the fields on submission
    const formRef = useRef(null);
    const formRef2 = useRef(null);
    const formRef3 = useRef(null);

    // selection option local variables
    const [type, setType] = useState('permanent');
    const [level, setLevel] = useState('Junior');
    const [industry, setIndustry] = useState('');
    const [size, setSize] = useState('');
    const [degree, setDegree] = useState('');
    // function handle the variable change type
    function handleSelectChange(event) {
        setType(event.target.value);
      }
    // function handle the variable change level

    function handleSelectChange2(event) {
        setLevel(event.target.value);
      }
    // function handle the variable change industry

    function handleSelectChange3(event) {
        setIndustry(event.target.value);
      }
    // function handle the variable change size

    function handleSelectChange4(event) {
        setSize(event.target.value);
      }
    // function handle the variable change size

    function handleSelectChange5(event) {
        setDegree(event.target.value);
      }
    //   start and end date variables 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // modal display variable for education section
    const [showE, setShowE] = useState(false);
//  function to close the education modal
    const handleCloseE = () =>{setShowE(false)
        formRef2.current.reset();
        setStartDate(new Date())
        setEndDate(new Date())
    }
//  function to open the education modal
    const handleShowE = () => setShowE(true);

    // modal display variable for work section
    const [show, setShow] = useState(false);
//  function to close the education modal
  
    const handleClose = () =>{setShow(false)
        formRef.current.reset();
        setStartDate(new Date())
        setEndDate(new Date())
    }
//  function to open the education modal

    const handleShow = () => setShow(true);

    // function to add skills
    const handlekeyDown=(e)=>{
        if(e.key!=="Enter") return
        const value=e.target.value
        if(!value.trim()) return
        setSkills([...skills,value])
        e.target.value=''
        }
    // function to remove skills

        const removeSkill=(item)=>{
            setSkills(skills.filter((el,i)=> i!==item))
        }
        // multiple work data storage variable
    const [workDataArray, setWorkDataArray] = useState([]);
                // single work data storage variable
    const [workData, setWorkData] = useState({});
        // multiple education data storage variable
        const [eduDataArray, setEduDataArray] = useState([]);
        // single education data storage variable
        const [eduData, setEduData] = useState({});
// function to submit single work to multiple work variable
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
// function to submit single education to multiple education variable

    const eduSubmit=(e)=>{
e.preventDefault()
let newEdu={...eduData}
newEdu.degree=degree
newEdu.startDate=moment(startDate).format('L') 
newEdu.endDate=moment(endDate).format('L') 
setEduDataArray([...eduDataArray,newEdu])
console.log(eduDataArray)
console.log([...eduDataArray,newEdu])

handleCloseE()
    }
// function to submit single work to single work variable
    const handleOnChangeWork = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...workData };
        newData[field] = value;
        setWorkData(newData);
        
        console.log(newData)

    }
// function to submit single education to single education variable
    const handleOnChangeEdu = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...eduData };
        newData[field] = value;
        setEduData(newData);
        
        console.log(newData)

    }
    // fuction to submit the whole form data
    const handleSubmit = e => {
        e.preventDefault()
        let newData={...data};
        newData.email=user.email
        newData.work=workDataArray
        newData.education=eduDataArray
        newData.typeOfJob=type
        newData.level=level
        newData.industry=industry
        newData.size=size
        newData.skills=skills
        console.log(newData)
        formRef3.current.reset();
        axios.post(`https://api.unive.com.bd/api/profile`, newData).then(res => res.data ? handleShowFinal() : '')

    }
    // local variables to define the display
    const [about, setAbout] = useState(true)
    const [work, setWork] = useState(false)
    const [education, setEducation] = useState(false)
    const [job, setJob] = useState(false)

    // function to handle display changes on tab
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

    useEffect(() => {
        // api.unive.com.bd
        fetch(`https://api.unive.com.bd/api/profile/${email}`).then(res => res.json()).then(data => {
            setProfile(data)
            setSkills(data.skills)
        })
    }, [email])
  return (
    <>
    <Container fluid className='bg-white py-3'>
        {/* navigation tab */}
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
    {/* common data form */}
<Container className='bg-white'>  <form ref={formRef3} className='mt-3  py-3' onSubmit={handleSubmit}>
    {/* about section */}
{about && <section>
    {/* left side  */}
               <GrChat/> 
               <p className='fs-6 fw-bold'>About you</p>
<p> Tell others a bit more about you and your passion.</p>
  {/* ---------------first name */}
  <Form.Label className='fw-bold'>First Name</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mt-2 mb-3 text-start"
                    
                >
                    <Form.Control defaultValue={profile.first_name} type="text" name="first_name" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------Last name--- */}
                <Form.Label className='fw-bold'>Last Name</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" defaultValue={profile.last_name} name="last_name" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----User name------- */}
                <Form.Label className='fw-bold'>Username</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="username"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" defaultValue={profile.username} name="username" className="text-start" placeholder='janedow' onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----Bio--------- */}
                <Form.Label className='fw-bold'>Bio</Form.Label>

                <FloatingLabel controlId="floatingTextarea2" label="bio">
    <Form.Control
      as="textarea"
      required
      onChange={handleOnChange}
      className='text-start'
      name="bio" placeholder='bio'
      style={{ height: '100px' }}
      defaultValue={profile.bio}
    />
                </FloatingLabel>

                {/* ------Current role------- */}

                <Form.Label className='fw-bold'>Current Role</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Current Role"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" defaultValue={profile.Current_Role} name="Current_Role" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------Employer------  */}
                <Form.Label className='fw-bold'>Employer</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employer"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" defaultValue={profile.employer} name="employer" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                {/* -----domain */}
                <Form.Label className='fw-bold'>Domain of Expertise</Form.Label>
               <FloatingLabel
                   controlId="floatingInput"
                   label="Domain of Expertise"
                   className="mt-2 mb-3 text-start"
               >
                   <Form.Control required type="text" defaultValue={profile.domain} name="domain" className="text-start" placeholder="Site Engineer" onChange={handleOnChange} />
               </FloatingLabel>
                <hr />
                {/*-----Social-------  */}
                <SiZwave />
               <p className='fs-6 fw-bold'>Social Profiles</p>
<p> Link your social profile(s) to show off your work.</p>
{/* ---------linkedin */}
                <Form.Label className='fw-bold'>LinkedIn
</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="LinkedIn"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" defaultValue={profile.LinkedIn} name="LinkedIn" className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                {/* -------Website--------- */}
                <Form.Label className='fw-bold'>Website
</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Website"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" name="website"  defaultValue={profile.website}  className="text-start" placeholder="Student" onChange={handleOnChange} />
                </FloatingLabel>
                </section>}
    {/* work section */}
                
                {work && <section className='bg-white'> 
                <MdOutlineWork/> 
                <div className="d-flex justify-content-between align-items-center">
               <p className='fs-6 fw-bold pt-2'>Work Experience</p>
{/* button to add work exp */}
                   <Button onClick={handleShow} variant="outline-primary" className='w-75 border p-2' size="lg">
        Add Experience
      </Button>
               </div>
               {profile?.work?.length >0 && profile?.work?.map((work,id)=>(
                <Row key={id} className='border mt-5 rounded workshadow'> 
                   <h2 className='text-center text-decoration-underline'> {work.role}</h2>
                   <section className='d-flex justify-content-between '>
<div className='mx-2'>
<p><span className="fw-bold"> Industry</span> {work.industry}</p>
<p><span className="fw-bold">Employer </span>{work.employer}</p>
</div>
<div className='mx-2'>
<p><span className="fw-bold">Started From</span> {work.startDate}</p>
<p><span className="fw-bold">End Date </span>{work.endDate}</p>
</div>                   </section>
                   </Row>
               )) }
               {workDataArray.length >0 && workDataArray.map((work,id)=>(
                <Row key={id} className='border mt-5 rounded workshadow'> 
                   <h2 className='text-center text-decoration-underline'> {work.role}</h2>
                   <section className='d-flex justify-content-between '>
<div className='mx-2'>
<p><span className="fw-bold"> Industry</span> {work.industry}</p>
<p><span className="fw-bold">Employer </span>{work.employer}</p>
</div>
<div className='mx-2'>
<p><span className="fw-bold">Started From</span> {work.startDate}</p>
<p><span className="fw-bold">End Date </span>{work.endDate}</p>
</div>                   </section>
                   </Row>
               )) }
            </section>
            }
                {/* education part */}
                {education && <section className='bg-white'> 
                <FaUserGraduate/> 
                <div className="d-flex justify-content-between align-items-center">
               <p className='fs-6 fw-bold pt-2'>Education</p>
{/* button to add education exp */}
<Button onClick={handleShowE} variant="outline-primary" className='w-75 border p-2' size="lg">
        Add Education
      </Button>
               </div>
               {profile?.education?.length>0 && profile?.education?.map((edu,id)=>(
                <Row key={id} className='border mt-5 rounded workshadow'> 
                   <h2 className='text-center text-decoration-underline'> {edu.degree}</h2>
                   <section className='d-flex justify-content-between '>
<div className='mx-2'>
<p><span className="fw-bold">Institution </span>{edu.institution}</p>
<p><span className="fw-bold"> Area of Concentration</span> {edu.area_of_concentration}</p>
</div>
<div className='me-1'>
<p><span className="fw-bold">Started From</span> {edu.startDate}</p>
<p><span className="fw-bold">End Date </span>{edu.endDate}</p>
</div>                   </section>
                   </Row>
               )) }
                {eduDataArray.length >0 && eduDataArray.map((edu,id)=>(
                <Row key={id} className='border mt-5 rounded workshadow'> 
                   <h2 className='text-center text-decoration-underline'> {edu.degree}</h2>
                   <section className='d-flex justify-content-between '>
<div className='mx-2'>
<p><span className="fw-bold">Institution </span>{edu.institution}</p>
<p><span className="fw-bold"> Area of Concentration</span> {edu.area_of_concentration}</p>
</div>
<div className='me-1'>
<p><span className="fw-bold">Started From</span> {edu.startDate}</p>
<p><span className="fw-bold">End Date </span>{edu.endDate}</p>
</div>                   </section>
                   </Row>
               )) }
            </section>
            }    
            {/* job */}
                {job && <section className='bg-white'> 
                <Row>
                    {/* job left side */}
                    <Col  xs={12} md={3}>
                    <MdOutlineWork className=' fs-4'/>
                    <p className='fw-bold fs-5'>Job information</p>
                    <p>What does your ideal job look like?</p>
                    </Col>
                    <Col xs={12} md={8}>
               
               {/* ----Role----- */}
               <Form.Label className='fw-bold'>Role Title</Form.Label>
               <FloatingLabel
                   controlId="floatingInput"
                   label="Role"
                   className="mt-2 mb-3 text-start"
               >
                   <Form.Control required defaultValue={profile.role} type="text" name="role" className="text-start" placeholder="Site Engineer" onChange={handleOnChange} />
               </FloatingLabel>
             
               {/* -----Type of job------ */}
               <Form.Label className='fw-bold'>Type of job</Form.Label>
              
               <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange} value={type}>
                <option value="permanent">Permanent</option>
                <option value="contractual">Contractual</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
              </Form.Select>
               {/* ---Level of seniority--- */}
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
 {/* company info */}
 <Row>
                    <Col  xs={12} md={3}>
                    <BsBuilding className=' fs-4'/>
                    <p className='fw-bold fs-5'>Company Information</p>
                    <p>What type of company would you like to work at?</p>
                    </Col>
                    <Col xs={12} md={8}>
               
               {/* ----Industry----- */}
               
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
            {/* --------size--- */}
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
         {/* display form submit btn when job section displays */}
  {job &&  <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>}
                                      
                {/* end of common form */}
                </form>
            </Container>
            {/*  end of form container*/}

</section>
    </Container>
{/* modal for work */}
    <Modal show={show} onHide={handleClose}>
          {/* modal header */}
                <Modal.Header closeButton>
                    <Modal.Title> Add your Work Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* form reference */}
              <form ref={formRef} className='py-2' onSubmit={workSubmit}>
               
                {/* ------Role--- */}
                <Form.Label className='fw-bold'>Role Title</Form.Label>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Role"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control required type="text" name="role" className="text-start" placeholder="Site Engineer" onChange={handleOnChangeWork} />
                </FloatingLabel>
                {/* ----Employer------- */}
                <Form.Label className='fw-bold'>Employer</Form.Label>
            
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employer"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" required className="text-start" placeholder="Employer" name="employer" onChange={handleOnChangeWork} />
                </FloatingLabel>
                {/* ---Employer Url--- */}
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
    {/* modal submission or cancel */}
  <Button variant="secondary" onClick={handleClose}>
                        Cancel!!
                    </Button>
                     <Button variant="success" onClick={workSubmit}>
                        Confirm!!
                    </Button>
                  
                    </div>
            </form>
              {/* end of work form */}
                </Modal.Body>
          
            </Modal>
              {/* end of work modal */}

{/* for education */}
    <Modal show={showE} onHide={handleCloseE}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Education</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* form reference */}
              <form ref={formRef2} className='py-2' onSubmit={eduSubmit}>
               
                {/* -----Degree---- */}
                <Form.Label className='fw-bold'>Degree</Form.Label>
              
               <Form.Select className='mb-2' aria-label="Type of Form:"  onChange={handleSelectChange5} value={degree}>
                <option></option>
                <option value="psc">PSC</option>
                <option value="jsc">JSC</option>
                <option value="ssc">SSC</option>
                <option value="hsc">HSC</option>
                <option value="diploma">Diploma</option>
                <option value="bsc">BSC</option>
                <option value="honors">Honors</option>
                <option value="masters">Masters</option>
                <option value="pgd">PGD</option>
                <option value="phd">PHD</option>
                <option value="vocational training">Vocational Training</option>
                <option value="online training">Online Training</option>
                <option value="others">Others</option>
              </Form.Select>
                {/* ----Area--Concentration----- */}
                <Form.Label className='fw-bold'>Area of Concentration</Form.Label>
            
                <FloatingLabel
                    controlId="floatingInput"
                    label="Area of Concentration"
                    className="mt-2 mb-3 text-start"
                >
                    <Form.Control type="text" required className="text-start" placeholder="Area of Concentration" name="area_of_concentration" onChange={handleOnChangeEdu} />
                </FloatingLabel>
                {/* ---Institution--- */}
                <Form.Label className='fw-bold'>Institution Name</Form.Label>
            
            <FloatingLabel
                controlId="floatingInput"
                label="Institution Name"
                className="mt-2 mb-3 text-start"
            >
                <Form.Control type="text" required className="text-start" placeholder="Institution" name="institution" onChange={handleOnChangeEdu} />
            </FloatingLabel>  
                {/* ------Industry------- */}
                 
  {/* ---------apply date */}
  <div className='d-flex '>
    <p className='w-100'>Start date
  <DatePicker className='w-100' required selected={startDate} onChange={(date) => setStartDate(date)} />
  </p>
  {/* ---------End date */}

  <p className='w-100'>End date
  <DatePicker className='w-100' required selected={endDate} onChange={(date) => setEndDate(date)} />
  </p></div>
  <hr />
  {/* form submission section */}
  <div className="d-flex justify-content-between">
  <Button variant="secondary" onClick={handleCloseE}>
                        Cancel!!
                    </Button>
                     <Button variant="success" onClick={eduSubmit}>
                        Confirm!!
                    </Button>
                  
                    </div>
            </form>
              {/* end of education form */}
                </Modal.Body>
          
            </Modal>
              {/* end of education modal */}

               {/* display final modal upon submission */}
            <Modal show={showFinal} onHide={handleCloseFinal}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Created</Modal.Title>
                </Modal.Header>
                <Modal.Body>profile is created</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseFinal}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>

    </>
    
  )
}
