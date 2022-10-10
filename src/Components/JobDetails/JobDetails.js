import { useEffect, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import LoginModal from '../Common/LoginModal';

import { BsBuilding, BsPersonCheckFill } from 'react-icons/bs';
import { FaCommentsDollar } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdBuildCircle, MdEmail, MdOutlineDateRange, MdPhoneCallback, MdWork } from 'react-icons/md';

import useAuth from '../Context/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './jobdetails.css';

export default function JobDetails() {


    const [post, setPost] = useState({});
    const [applied, setApplied] = useState({});
    const [myjobs, setMyjobs] = useState([]);
    const navigate = useNavigate()
    const { user } = useAuth()
    const [pdf, setPdf] = useState(null);
    
    // for login
    const [Lshow, setLShow] = useState(false);
    const handleCloseL = () => setLShow(false);
    const handleShowL = () => setLShow(true);
    // for login
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const handleShowForm = () => setShowForm(true);
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
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/jobApply/${user.email}`).then(res => res.json()).then(data => {
            setMyjobs(data)
        })
    }, [id,user.email])
    useEffect(() => {
       if(myjobs.length>0){
        setApplied(myjobs.find(job=>job?.jobData?._id===post._id))
       }
        
    }, [myjobs,post._id])
// applying function
    const handleSubmit = e => {
        e.preventDefault();
        const data = { email: user.email }
        data.jobData = post;
        let formData = new FormData();
        // Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('pdf',pdf)
        formData.append('email',user.email)
        formData.append('jobdata',JSON.stringify(post))
        // data.orderStatus = 'Pending';
    //    for (var value of formData.values()) {
    //       console.log(value);}
        // axios.post('https://fierce-woodland-01411.herokuapp.com/api/jobApply', data).then(res => res.data.insertedId ? handleShow() : handleShowF())
        fetch('https://fierce-woodland-01411.herokuapp.com/api/jobApply', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    handleShow()
                } else {
                    handleShowF();

                }
            })
        handleCloseForm()

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
<p className='fw-bold ' ><MdOutlineDateRange className='fs-4'/> Application Window <p>{post.startDate} - {post.endDate}</p></p>
{!user.email && <Button className='bluebtn' onClick={handleShowL}>Sign in to Apply</Button>}
{user.email && <Button onClick={handleShowForm} className='bluebtn apply hover btn py-2 px-5'>Apply for the job </Button>}
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
<h5 className='fw-bold fs-6'><MdBuildCircle className='fs-4 text-secondary'/> Skills Requirements </h5>
<p className='w-50 fs-6 text-left'>{post?.skills?.length>0 && post?.skills?.map((skill,index)=>(
    <span key={index} className='text skill-item mt-2 me-2 '> {skill}</span>
))} </p>
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
    {applied?.email ? <p className='text-center fs-2 text-danger'>Applied</p>:''}
    <Footer/>
    <LoginModal Lshow={Lshow} handleCloseL={handleCloseL}/>
    <Modal show={showForm} onHide={handleCloseForm}>
                <Modal.Header closeButton>
                    <h2 className='mx-auto ps-5'>Attach Your CV</h2>
                </Modal.Header>
                <Modal.Body>
                    <Container className='py-2'>
                        {/* Login form */}
                        <form className='mt-3  py-3' onSubmit={handleSubmit}>
                        
                            <Form.Group controlId="formFile" className="text-start ms-2 mb-3">
                                <Form.Label >CV (if any)</Form.Label>
                                <Form.Control className="text-start" type="file" accept="application/pdf" onChange={e => setPdf(e.target.files[0])} />
                            </Form.Group>
                            <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>
    
    </>
     )
}
