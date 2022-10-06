import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import LoginModal from '../Common/LoginModal';
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
<h5 className='fw-bold'>Company {post.organization}</h5>
<p>Phone: {post.PhoneNumber} - {post.email}</p>
</div>
<p className='fw-bold ' >Application Deadline-{post.startDate} - {post.endDate}</p>
{!user.email && <Button className='bluebtn' onClick={handleShowL}>Sign in to Apply</Button>}
{user.email && <Button onClick={(e) => applyJob(e)} className='bluebtn apply hover btn py-2 px-5'>Apply for the job </Button>}
{/* <p onClick={(e) => applyJob(e)} className=' btn-primary variant="primary" text-white py-2 px-5 '>Apply for the job </p> */}

</section>
<hr/>
<h5 className='fw-bold fs-6 '>Job Context </h5>
<p className='w-50 text-left fs-6'>{post.jd}</p>
<h5 className='fw-bold fs-6'>Experience Requirements </h5>
<p className='w-50 fs-6 text-left'>{post.experience} years</p>
<h5 className='fw-bold fs-6'>Skills Requirements </h5>
<p className='w-50 fs-6 text-left'>{post?.skills?.join(', ')}</p>
<h5 className='fw-bold fs-6'>Expected Salary </h5>
<p className='w-50 fs-6 text-left'>{post.min_salary}-{post.max_salary} BDT</p>
<h5 className='fw-bold fs-6'>Age Requirements </h5>
<p className='w-50 fs-6 text-left'>{post.min_age}-{post.max_age} years</p>
<h5 className='fw-bold fs-6'>Expected Salary </h5>
<p className='w-50 fs-6 text-left'>{post.min_salary}-{post.max_salary} BDT</p>
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
