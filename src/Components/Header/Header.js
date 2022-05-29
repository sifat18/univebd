import { Button, Container, FloatingLabel, Form, Modal, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
// import logo from '../images/logos/cropped-small-px-e1638453380416.png'
import gogo from '../images/logos/icons8-google.svg'
import logo from '../images/logos/logo.png'
import arrow from '../images/icons8-arrow-24.png'
import { useState } from 'react';
import Register from '../Register/Register';
import { useNavigate } from "react-router-dom";
import useAuth from '../Context/useAuth';
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";
import { FiBook } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiPuzzle } from "react-icons/ti";

export default function Header() {
    const [show, setShow] = useState(false);
    const [Lshow, setLShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseL = () => setLShow(false);
    const handleShowL = () => setLShow(true);

    // offcanvas
    const [showOff, setShowOff] = useState(false);

    const handleOff = () => setShowOff(false);
    const handleOn = () => setShowOff(true);

    const [registerData, setregisterData] = useState({});
    const [passError, setpassError] = useState('');
    const [LoginData, setLoginData] = useState({});
    const history = useNavigate();
    const { createUser, signGoogle, emailPass, error, user, isLoading, logOut } = useAuth();
    const location = useLocation();

    let repassword;
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setregisterData(newRegisterData);
        console.log(newRegisterData)

    }
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
    const handleRegisterSubmit = e => {
        e.preventDefault()
        console.log(registerData);
        createUser(registerData.name, registerData.email, registerData.pass, history);
        // console.log('testing');
        handleClose()
    }
    // login
    const handleOnChangeL = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...LoginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)

    }
    const handleLogin = () => {
        signGoogle(location, history)
        handleCloseL()
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        console.log(LoginData);
        emailPass(LoginData.email, LoginData.pass, location, history)
        handleCloseL()

    }

    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <>
            {/* NAV BAR */}
            <Navbar sticky="top" className='my-2' fluid collapseOnSelect expand="lg" bg="white" variant="light">
                <Container fluid>
                    {user.displayName && <span onClick={handleOn} className='me-4  side-nav-btn rounded-circle border border-secondary'>  <MdNavigateNext className='mousepoint fs-2'/></span>}
                    <NavLink to='/'> <Navbar.Brand href="#home" className="me-5 ">
                        <img
                            src={logo}
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
                            <NavLink to='/why-unive'>  <Nav.Link className=" d-none d-md-block mx-5 text-dark" href="/why-unive">ইউনিভ কেন</Nav.Link></NavLink>
                            <NavLink to='/how-it-works'><Nav.Link className="d-none d-md-block ms-5 text-dark " href="/how-it-works">কিভাবে কাজ করে</Nav.Link></NavLink>
                            <NavLink to='/why-unive'>  <Nav.Link className=" d-md-none text-dark" href="/why-unive">ইউনিভ কেন</Nav.Link></NavLink>
                            <NavLink to='/how-it-works'><Nav.Link className=" d-md-none text-dark" href="/how-it-works">কিভাবে কাজ করে</Nav.Link></NavLink>

                           
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fw-bold d-none d-md-block ">
                            <NavLink to='/learn'><Nav.Link className=" d-inline mx-5 text-dark" href="#course">কোর্সসমুহ</Nav.Link></NavLink >
                            <NavLink to='/contact'><Nav.Link className=" d-inline mx-5 text-dark" href="/contact">যোগাযোগ</Nav.Link></NavLink >
                        </Nav>
                        <Nav className="fw-bold d-md-none ">
                            <NavLink to='/learn'><Nav.Link className="text-dark " href="#course">কোর্সসমুহ</Nav.Link></NavLink >
                            <NavLink to='/contact'><Nav.Link className="text-dark" href="/contact">যোগাযোগ</Nav.Link></NavLink >
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
            <Modal show={show} onHide={handleClose}>
               
                <Modal.Body>
                    <Container className='py-2'>
                        {/* register form */}
                        <h3 className='text-center fs-1'>Join Unive for free</h3>
                        <form className='mx-auto  py-3 ' onSubmit={handleRegisterSubmit}>
                           
                          <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="text" name="name" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                            </FloatingLabel>
                           {/* ----------- */}
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange}/>
                            </FloatingLabel>
                           
                           {/* ----------- */}
                           <FloatingLabel controlId="floatingPassword" label="Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start"  name="pass" placeholder="Password" onChange={handleOnChange} />
                            </FloatingLabel>
                           {/* --------------- */}
                            <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start"  placeholder='re-enter password' name="re-pass" onBlur={hadlePass} />
                            </FloatingLabel>
                           {/* ----------- */}
                            {passError ? <p className='text-danger text-center'>{passError}</p> : ''}

                            <p className='btn btn-primary d-block py-3 px-5 mx-auto mt-2  mb-5'>Register </p>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>
{/* login modal */}
            <Modal show={Lshow} onHide={handleCloseL}>
                <Modal.Header closeButton>
                    <h2 className='mx-auto ps-5'>Welcome Back</h2>
                </Modal.Header>
                <Modal.Body>
                    <Container className='py-2'>
                        {/* Login form */}
                        <h2 className='text-start fs-3 fw-bold'>Sign in to your account</h2>
                        <form className='mt-3  py-3' onSubmit={handleLoginSubmit}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="email" className="text-start" placeholder="name@example.com" name='email' onChange={handleOnChangeL} />
                            </FloatingLabel>

                            {/* ---------------- */}
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start" name="pass" placeholder="Password" onChange={handleOnChangeL} />
                            </FloatingLabel>
                            {error ? <p className='text-danger text-center'>{error}</p> : ''}

                            <p className='btn btn-primary d-block mx-auto my-3 py-3 px-5 '>Login </p>
                        </form>
                        {/* google sign in */}
                        <p className='fs-5 my-3'>Stay signed in</p>
                        <button className='btn  border border-1 d-block mb-5 mx-auto text-dark' onClick={handleLogin} > <img src={gogo} alt="" height='30' width='30' /> Google Sign In</button>
                    </Container>

                </Modal.Body>


            </Modal>

            {/* offcanvas */}
            <Offcanvas className='ss' show={showOff} onHide={handleOff}>
                <Offcanvas.Body>
                    <div class="d-flex flex-column  mb-3">
                        <NavLink to='/learn'> <FiBook className='fs-2  text-dark mx-2 mb-2' /><div className="littleFont pb-4"><span className=" ps-3">My </span>Learning</div></NavLink>
                        <NavLink to='/learn'><BiSearchAlt2 className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Explore</div></NavLink>
                        <NavLink to='/projects'><TiPuzzle className='fs-2 mx-2 text-dark ' /><div className="littleFont pb-3 ">Projects</div></NavLink>
                        <NavLink to='/assessments'><GiBullseye className='fs-2 mx-2 text-dark ' /> <div className="littleFont pb-3">Assesments</div></NavLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
