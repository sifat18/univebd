import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import LoginModal from '../Common/LoginModal';

import { FaCommentsDollar } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';
import { MdPhoneCallback } from 'react-icons/md';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsPersonCheckFill } from 'react-icons/bs';
import { BsBuilding } from 'react-icons/bs';
import { SiSkillshare } from 'react-icons/si';

import useAuth from '../Context/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './jobdetails.css';
export default function JobDetails() {
    const [post, setPost] = useState({});
    const navigate = useNavigate()
    
    // for login
    const [Lshow, setLShow] = useState(false);
    const handleCloseL = () => setLShow(false);
    const handleShowL = () => setLShow(true);
// ------
// after apply modal
const [show, setShow] = useState(false);
const handleClose = (flag) => {
        setShow(false);
// if true navigate
        if(flag){
            window.open('/dashboard/myjobs','_blank')
        // navigate('/dashboard/mycourses')
    }
}
    const handleShow = () => setShow(true);
    // if the course is available or not
    const [showF, setShowF] = useState(false);
    const handleCloseF = () => setShowF(false);
    const handleShowF = () => setShowF(true);
    // ---
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/jobpost/${id}`).then(res => res.json()).then(data => {
            setPost(data)
        })
    }, [id])
 
    const { user } = useAuth()
// applying function
    const applyJob = e => {
        e.preventDefault();
        const data = { email: user.email }
        data.jobData = post;
        // data.orderStatus = 'Pending';
        console.log(data)
        axios.post('https://fierce-woodland-01411.herokuapp.com/api/jobApply', data).then(res => res.data.insertedId ? handleShow() : handleShowF())

    }
  return (
    <>
    <Header/>
    {/* <Container fluid className='bg-secondary'> */}
    <Container className='my-5 '>
<h1 className='text-success fs-1 pt-5 mb-5'> Job Circular for {post.position}</h1>
<hr/>
<section className='d-flex justify-content-between align-items-center '>
<div>
<h5 className='fw-bold'> <BsBuilding className='fs-4'/> <span className='text-primary'>Company</span> {post.organization}</h5>
<p><MdPhoneCallback className='fs-4'/> Phone: {post.PhoneNumber} <MdEmail className='fs-4'/> {post.email}</p>
</div>
<p className='fw-bold ' ><MdOutlineDateRange className='fs-4'/> Application Deadline-{post.startDate} - {post.endDate}</p>
{!user.email && <Button className='bluebtn' onClick={handleShowL}>Sign in to Apply</Button>}
{user.email && <Button onClick={(e) => applyJob(e)} className='bluebtn apply hover btn py-2 px-5'>Apply for the job </Button>}
{/* <p onClick={(e) => applyJob(e)} className=' btn-primary variant="primary" text-white py-2 px-5 '>Apply for the job </p> */}

</section>
<hr/>
<h5 className='fw-bold fs-6 '> <MdWork className='fs-4'/> Job Context </h5>
<p className=' text-left fs-6'>{post.jd}</p>
<hr/>
<section className='d-flex justify-content-between'>
<div >
<h5 className='fw-bold fs-6'> <BsPersonCheckFill className='fs-4' /> Age Requirements </h5>
<p className=' fs-6 text-center'>{post.min_age}-{post.max_age} years</p>
{/* <hr/> */}
</div>
<div>
<h5 className='fw-bold fs-6'> <GiSkills className='fs-4'/> Experience Requirements </h5>
<p className=' fs-6 text-center'>{post.experience} years</p>
{/* <hr/> */}
</div>
<div className=''>
<h5 className='fw-bold fs-6'> <FaCommentsDollar className='fs-4'/> Expected Salary </h5>
<p className=' fs-6 text-end'>{post.min_salary}-{post.max_salary} BDT</p>
{/* <hr/> */}
</div>
</section>
<hr/>
<h5 className='fw-bold fs-6'><SiSkillshare className='fs-4'/> Skills Requirements </h5>
<p className='w-50 fs-6 text-left'>{post?.skills?.join(', ')}</p>
<hr/>

    </Container>
       {/* modal after submit form */}
       <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your application for the position of {post.postion} is successful.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>handleClose(true)}>
                        Visit My Appilcations
                    </Button>
                    <Button variant="info" onClick={()=>handleClose(false)}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* already has job */}
            <Modal show={showF} onHide={handleCloseF}>
                <Modal.Header closeButton>
                    <Modal.Title>OOPPS</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have already applied for this job</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseF}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
    {/* </Container> */}
    <Footer/>
    <LoginModal Lshow={Lshow} handleCloseL={handleCloseL}/>
    </>
     )
}
