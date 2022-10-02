import { useEffect, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';

export default function JobDetails() {
    const [post, setPost] = useState({});
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = (flag) => {
        setShow(false);
// if true navigate
        if(flag){
            window.open('/dashboard/mycourses','_blank')
        // navigate('/dashboard/mycourses')
    }
}
    const handleShow = () => setShow(true);
    const [showF, setShowF] = useState(false);
    const handleCloseF = () => setShowF(false);
    const handleShowF = () => setShowF(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/jobpost/${id}`).then(res => res.json()).then(data => {
            setPost(data)
        })
    }, [id])
 
    const { user } = useAuth()

    const applyJob = e => {
        e.preventDefault();
        const data = { email: 'a@a.com' }
        data.jobData = post;
        // data.orderStatus = 'Pending';
        console.log(data)
        axios.post('https://fierce-woodland-01411.herokuapp.com/api/jobApply', data).then(res => res.data.insertedId ? handleShow() : handleShowF())

    }
  return (
    <>
    <Header/>
    <Container fluid className='bg-secondary'>
    <Container className='mt-5 bg-light ps-5'>
<h3 className='text-success pt-5 '> Job Circular for {post.position}</h3>
<p>Application Deadline-{post.startDate} - {post.endDate}</p>

<h5 className='fw-bold'>Company {post.organization}</h5>
<p>Phone: {post.PhoneNumber} - {post.email}</p>
<h5 className='fw-bold'>Job Context </h5>
<p className='w-50 fs-5 text-left'>{post.jd}</p>
<h5 className='fw-bold'>Experience Requirements </h5>
<p className='w-50 fs-5 text-left'>{post.experience} years</p>
<h5 className='fw-bold'>Skills Requirements </h5>
<p className='w-50 fs-5 text-left'>{post?.skills?.join(', ')}</p>
<h5 className='fw-bold'>Expected Salary </h5>
<p className='w-50 fs-5 text-left'>{post.min_salary}-{post.max_salary} BDT</p>
<h5 className='fw-bold'>Age Requirements </h5>
<p className='w-50 fs-5 text-left'>{post.min_age}-{post.max_age} years</p>
<h5 className='fw-bold'>Expected Salary </h5>
<p className='w-50 fs-5 text-left'>{post.min_salary}-{post.max_salary} BDT</p>
<Button onClick={(e) => applyJob(e)} className='bluebtn btn py-2 px-5'>Start learning </Button>
    </Container>
       {/* modal after submit form */}
       <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>ধন্যবাদ কোর্সে রেজিস্ট্রেশন করার জন্য! কোর্স টি লাইভ হওয়া মাত্রই আমরা আপনাকে ইমেইল এর মাধ্যমে জানিয়ে দিবো!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>handleClose(true)}>
                        Visit My Courses
                    </Button>
                    <Button variant="info" onClick={()=>handleClose(false)}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* already has course */}
            <Modal show={showF} onHide={handleCloseF}>
                <Modal.Header closeButton>
                    <Modal.Title>OOPPS</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have already added this course</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseF}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
    </Container>
    </>
     )
}
