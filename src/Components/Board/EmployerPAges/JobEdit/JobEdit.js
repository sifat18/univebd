import axios from 'axios';
// import './jobpost.css';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

export default function JobEdit() {
  const [data, setData] = useState({});
  const [skills, setSkills] = useState([]);
  const imageStorageKey='a3a4f59a1a4c29023ff43f75bd8f551d'

   // setting date variables 
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');
  const { id } = useParams()
  const [imgLink, setImgLink] = useState(null);
  useEffect(() => {
      fetch(`https://fierce-woodland-01411.herokuapp.com/api/jobpost/${id}`).then(res => res.json()).then(data => {
        setData(data)
        setStartDate(new Date(data.startDate))
        setEndDate(new Date(data.endDate))
        setSkills(data.skills)
      })
  }, [id])

  const generateImageLink = img => {
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(result =>{
        if(result.success){
            const imgURL = result.data.url;
            setImgLink(imgURL)
}})} 
//    modal display
   const [showT, setShowT] = useState(false);
   const handleCloseT = () => setShowT(false);
   const handleShowT = () => setShowT(true)
// looping skills
   // storing form data

   const {user}=useAuth()

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
       data.imgLink=imgLink || data.imgLink
       data.startDate=moment(startDate).format('L') 
       data.endDate=moment(endDate).format('L') 
       console.log(data);
       axios.put(`https://fierce-woodland-01411.herokuapp.com/api/jobpost/edit/${id}`, data).then(res => res.data ? handleShowT() : '')

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
                   <Form.Control required type="text" value={data?.organization} name="organization" className="text-start" placeholder="xyz" onChange={handleOnChange} />
               </FloatingLabel>
               {/* ----------- */}
           
               <FloatingLabel
                   controlId="floatingInput"
                   label="Email address"
                   className="mt-2 mb-5 text-start"
               >
                   <Form.Control type="email" value={data?.email} required className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
               </FloatingLabel>
               {/* ------ */}
                
               {/* ------phone------- */}

               <FloatingLabel
                   controlId="floatingInput"
                   label="Phone Number"
                   className="mt-2 mb-5 text-start"
               >
                   <Form.Control type="number" value={data?.PhoneNumber} required name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
               </FloatingLabel>
                
               {/* ------position------- */}

               <FloatingLabel
                   controlId="floatingInput"
                   label="Position"
                   className="mt-2 mb-5 text-start"
               >
                   <Form.Control type="text" required value={data?.position} name="position" className="text-start" placeholder="Project Manager" onChange={handleOnChange} />
               </FloatingLabel>
               {/* ------experienece------- */}

               <FloatingLabel
                   controlId="floatingInput"
                   label="Experience"
                   className="mt-2 mb-5 text-start"
               >
                   <Form.Control type="text" value={data?.experience} required name="experience" className="text-start"  onChange={handleOnChange} />
               </FloatingLabel>
                  {/* -----------------age--------------------- */}
 <div className='d-flex'>
 <FloatingLabel
                   controlId="floatingInput"
                   label="Minimum Age"
                   className="mt-2 mb-5 text-start w-50 "
               >
                    <Form.Control type="number" value={data?.min_age} required className="text-start" placeholder="22" name="min_age" onChange={handleOnChange} />
                    
                    </FloatingLabel>
 <FloatingLabel
                   controlId="floatingInput"
                   label="Maximum Age"
                   className="mt-2 mb-5 text-start w-50"
               >
                    <Form.Control type="number" value={data?.max_age} required className="text-start" placeholder="50" name="max_age" onChange={handleOnChange} />
                    
                    </FloatingLabel>
                    </div>
              
   {/* -----------------salary--------------------- */}
 <div className='d-flex'>
 <FloatingLabel
                   controlId="floatingInput"
                   label="Minimum Salary"
                   className="mt-2 mb-5 text-start w-50 "
               >
                    <Form.Control type="number" value={data?.min_salary} required className="text-start" placeholder="20000" name="min_salary" onChange={handleOnChange} />
                    
                    </FloatingLabel>
 <FloatingLabel
                   controlId="floatingInput"
                   label="Maximum Salary"
                   className="mt-2 mb-5 text-start w-50"
               >
                    <Form.Control type="number" value={data?.max_salary} required className="text-start" placeholder="50000" name="max_salary" onChange={handleOnChange} />
                    
                    </FloatingLabel>
                    </div>
                     {/*-------skill-----  */}

               <FloatingLabel
                   controlId="floatingInput"
                   label="Edit Required Skills [Press Enter After Each Skill]"
                   className="mt-2 mb-5 text-start "
               >
               {/* <div className='tag-container'> */}
      
 <Form.Control onKeyDown={handlekeyDown}  type="text" className="text-start" placeholder="xyz"  />
   {/* <input   /> */}
   {skills?.length >0 &&
 <div className='skills-container pt-2'>
   {skills?.map((skill,index)=>(
<div key={index} className='skill-item '>
   <span className='text'> {skill}</span>
   <span className='close' onClick={()=>removeSkill(index)}>x</span>
</div>
   ))}
   </div>
   }
   </FloatingLabel>
   {/* ------------------------------ */}
   <FloatingLabel controlId="floatingTextarea2" label="Job Description">
   <Form.Control
     as="textarea"
     value={data?.jd}
     required
     onChange={handleOnChange}
     className='text-start'
     name="jd" placeholder='Job Description'
     style={{ height: '100px' }}
   />
 </FloatingLabel>
 {/* ---------apply date */}
 <div className='d-flex '>
   <p className='w-100'>start date
 <DatePicker className='w-100'  required selected={startDate} onChange={(date) => setStartDate(date)} />
 </p>
 <p className='w-100'>end date
 <DatePicker className='w-100' required  selected={endDate} onChange={(date) => setEndDate(date)} />
 </p></div>
 <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Company logo </Form.Label>
        <Form.Control type="file" onChange={e => generateImageLink(e.target.files[0])}/>
      </Form.Group>
  
           </form>
           <button onClick={(e)=>handleSubmit(e)} className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
           {/* modal */}
           <Modal show={showT} onHide={handleCloseT}>
               <Modal.Header closeButton>
                   <Modal.Title>Job Post Edited Successfully</Modal.Title>
               </Modal.Header>
               <Modal.Body>Post Edited</Modal.Body>
               <Modal.Footer>
                   <Button variant="success" onClick={handleCloseT}>
                       close!!
                   </Button>
               </Modal.Footer>
           </Modal>

       </Container>
  )
}
