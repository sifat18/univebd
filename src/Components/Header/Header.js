import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { GiBullseye } from "react-icons/gi";
import { MdBookmarkAdd, MdNavigateNext, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { TiPuzzle } from "react-icons/ti";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '../Common/LoginModal';
import RegisterModal from '../Common/RegisterModal';
import useAuth from '../Context/useAuth';
import arrow from '../images/icons8-arrow-24.png';
import logo from '../images/logos/logo.png';
import logo1 from '../images/logos/unive_logo.svg';
import './header.css';

export default function Header() {
//    modal display states and function
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// login mdal
    const [Lshow, setLShow] = useState(false);
    const handleCloseL = () => setLShow(false);
    const handleShowL = () => setLShow(true);

    // offcanvas
    const [showOff, setShowOff] = useState(false);
    const handleOff = () => setShowOff(false);
    const handleOn = () => setShowOff(true);
// local states
    const [registerData, setregisterData] = useState({});
    const [passError, setpassError] = useState('');
    const history = useNavigate();
    // getting methods from firebase
    const { createUser, signGoogle, emailPass, error, user, isLoading, logOut, admin } = useAuth();
    const location = useLocation();

    let repassword;
    // register form field changes
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setregisterData(newRegisterData);
        console.log(newRegisterData)

    }
    // check pass function

    const hadlePass = e => {
        console.log(e.target.value);
        repassword = e.target.value;
        if (registerData.pass === repassword) {
            console.log(registerData.pass, repassword)
            setpassError('')
        } else {
            console.log(registerData.pass, repassword)
            setpassError('passward doesnt match')

        }
    }
    // submit register data
    const handleRegisterSubmit = e => {
        e.preventDefault()
        console.log(registerData);
        createUser(registerData.name, registerData.email, registerData.pass, history);
        // console.log('testing');
        
    }
    useEffect(() => {
        if(error.length){
            handleShow()
        }else{
             handleClose()
              }
     }, [error])
    
   
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <>
            {/* NAV BAR */}
            <Navbar sticky="top" className='mb-2 bgcolor' fluid collapseOnSelect expand="lg" bg='light' variant="light">
                <Container fluid>
                    {user.displayName && <span onClick={handleOn} className='me-4  side-nav-btn rounded-circle border-secondary'>  <MdNavigateNext className='mousepoint fs-2' /></span>}
                    <NavLink to='/'> <Navbar.Brand href="#home" className="me-5 ">
                        <img
                            src={logo1}
                            width="100"
                            height=""
                            className="d-inline-block align-top img-fluid"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand></NavLink >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="  fw-bold  ">
                            {/* <Nav.Link href="#home">Solution</Nav.Link> */}
                            <NavLink to='/why-unive'>  <Nav.Link className=" d-none d-md-block mx-5 text-dark" href="/why-unive">??????????????? ?????????</Nav.Link></NavLink>
                            <NavLink to='/how-it-works'><Nav.Link className="d-none d-md-block ms-5 text-dark " href="/how-it-works">?????????????????? ????????? ?????????</Nav.Link></NavLink>
                            <NavLink to='/why-unive'>  <Nav.Link className=" d-md-none text-dark" href="/why-unive">??????????????? ?????????</Nav.Link></NavLink>
                            <NavLink to='/how-it-works'><Nav.Link className=" d-md-none text-dark" href="/how-it-works">?????????????????? ????????? ?????????</Nav.Link></NavLink>


                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fw-bold d-none d-md-block ">
                            <NavLink to='/learn'><Nav.Link className=" d-inline mx-5 text-dark" href="#course">???????????????????????????</Nav.Link></NavLink >
                            <NavLink to='/contact'><Nav.Link className=" d-inline mx-5 text-dark" href="/contact">?????????????????????</Nav.Link></NavLink >
                            {/* <NavLink to='/job_browse'><Nav.Link className=" d-inline mx-5 text-dark" href="/contact">jobs</Nav.Link></NavLink > */}
                        </Nav>
                        <Nav className="fw-bold d-md-none ">
                            <NavLink to='/learn'><Nav.Link className="text-dark " href="#course">???????????????????????????</Nav.Link></NavLink >
                            <NavLink to='/contact'><Nav.Link className="text-dark" href="/contact">?????????????????????</Nav.Link></NavLink >
                        </Nav>
                        {user.displayName && <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                        <Nav className="fw-bold">
                            {user.displayName && <Nav.Link onClick={logOut}>Log out</Nav.Link>}
                            {!user.displayName && <Nav.Link onClick={handleShowL}>Log In</Nav.Link>}
                            {!user.displayName && <Button onClick={handleShow} variant="btn btn-primary" className="ms-5 bluebtn">Join For free <img src={arrow} alt="arrow" /></Button>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* modal register*/}
        <RegisterModal show={show} handleClose={handleClose} error={error} handleRegisterSubmit={handleRegisterSubmit}handleOnChange={handleOnChange}hadlePass={hadlePass} passError={passError}/>
            {/* login modal */}
         <LoginModal Lshow={Lshow} handleCloseL={handleCloseL}/>

            {/* offcanvas */}
            <Offcanvas className='ss' show={showOff} onHide={handleOff}>
                <Offcanvas.Body>
                    <div class="d-flex flex-column  mb-3">
                        <NavLink to='/dashboard/mycourses'> <FiBook className='fs-2  text-dark mx-2 mb-2' /><div className="littleFont pb-4"><span className=" ps-3">My </span>Dashboard</div></NavLink>
                        <NavLink to='/learn'><BiSearchAlt2 className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Explore</div></NavLink>
                        <NavLink to='/projects'><TiPuzzle className='fs-2 mx-2 text-dark ' /><div className="littleFont pb-3 ">Projects</div></NavLink>
                        <NavLink to='/assessments'><GiBullseye className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Assesments</div></NavLink>
                        {admin && <NavLink to='/dashboard/addcourse'><MdBookmarkAdd className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Add Course</div></NavLink>}
                        {admin && <NavLink to='/dashboard/adadmin'><RiAdminLine className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Add Admin</div></NavLink>}
                        {admin && <NavLink to='/dashboard/adtutor'><AiOutlineUserAdd className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Add Tutor</div></NavLink>}
                        {user.email && <NavLink to='/dashboard'><MdOutlineDashboardCustomize className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Dashboard</div></NavLink>}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
