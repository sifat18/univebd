import axios from 'axios';
import './jobpost.css';
import { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap'

export default function JobPost() {

    const [skills, setSkills] = useState([]);
    const [data, setData] = useState({});
    const [showT, setShowT] = useState(false);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => setShowT(true)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const handleSubmit = e => {
        e.preventDefault()
        data.skills=skills
        console.log(data);

        // axios.post(`https://fierce-woodland-01411.herokuapp.com/api/employerProfile`, data).then(res => res.data ? handleShowT() : '')

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
    return (
        <Container className='py-2'>
            {/* Login form */}
            <form className='mt-3  py-3' onSubmit={handleSubmit}>
               
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
                <FloatingLabel
                    controlId="floatingInput"
                    label="Add a skills"
                    className="mt-2 mb-5 text-start "
                >
                {/* <div className='tag-container'> */}
       
  <Form.Control onKeyDown={handlekeyDown} type="text" className="text-start" placeholder="xyz"  />
    {/* <input   /> */}
    {skills.length >0 &&
  <div className='skills-container pt-2'>
    {skills.map((skill,index)=>(
<div className='skill-item '>
    <span className='text'> {skill}</span>
    <span className='close' onClick={()=>removeSkill(index)}>x</span>
</div>
    ))}
    </div>
    }
    </FloatingLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Job Description">
    <Form.Control
      as="textarea"
      className='text-start'
      name="message" placeholder='আপনার মেসেজটি লিখুন'
      style={{ height: '100px' }}
    />
  </FloatingLabel>
    <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
            </form>
            {/* modal */}
            <Modal show={showT} onHide={handleCloseT}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks for your interest</Modal.Title>
                </Modal.Header>
                <Modal.Body>One of our representatives will get back to you asap.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseT}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}
