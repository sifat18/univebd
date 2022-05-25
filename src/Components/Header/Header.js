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
        // console.log(loginData)

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
            <Navbar sticky="top" fluid collapseOnSelect expand="lg" bg="white" variant="light">
                <Container fluid>
                    {user.displayName && <span onClick={handleOn} className='fs-2 pe-3'>  <GiHamburgerMenu /></span>}
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

                            {/* <NavDropdown title="ইউনিভ কেন" id="navbarScrollingDropdown" >
                                <NavLink to='/business'>    <NavDropdown.Item href="#action3">Developer team</NavDropdown.Item></NavLink>
                                <NavLink to='/individual-learner'> <NavDropdown.Item href="#action4">Developers</NavDropdown.Item></NavLink>
                            </NavDropdown>
                            <NavDropdown title="কিভাবে কাজ করে" id="navbarScrollingDropdown" >
                                <NavLink to='/upskill'> <NavDropdown.Item href="#action3">Learning for teams</NavDropdown.Item></NavLink >
                                <NavLink to='/upskill'><NavDropdown.Item href="#action4">Learning for individuals</NavDropdown.Item></NavLink >
                                <NavLink to='/onboarding'><NavDropdown.Item href="#action3">Onboarding</NavDropdown.Item></NavLink >
                                <NavLink to='/upskill'><NavDropdown.Item href="#action4">Assesments</NavDropdown.Item></NavLink >
                                <NavLink to='/learning-plans'><NavDropdown.Item href="#action3">Personalized learning plans</NavDropdown.Item></NavLink >
                                <NavLink to='/projects'><NavDropdown.Item href="#action4">Projects</NavDropdown.Item></NavLink >
                            </NavDropdown> */}

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
                            {user.displayName && <Nav.Link onClick={logOut}>LogOut</Nav.Link>}
                            {!user.displayName && <Nav.Link onClick={handleShowL}>Log In</Nav.Link>}
                            {!user.displayName && <Button onClick={handleShow} variant="btn btn-primary" className="ms-5 bluebtn">Join For free <img src={arrow} alt="arrow" /></Button>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* modal register*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <Container className='py-2'>
                        {/* register form */}
                        <h3 className='text-center'>Join Unive for free</h3>
                        <form className='mx-auto  py-3 ' onSubmit={handleRegisterSubmit}>
                            <label htmlFor="">Username</label>
                            <input required className='input-group mt-2 mb-3 ' type="text" onChange={handleOnChange} placeholder='name' name="name" id="name" />
                            <label htmlFor="">Email</label>
                            <input required className='input-group my-2 mb-3 ' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                            <label htmlFor="">Password</label>
                            <input required className='input-group my-2 mb-3 ' type="password" onChange={handleOnChange} placeholder='password' name="pass" id="pass" />
                            <label htmlFor="">Confirm Password</label>
                            <input required className='input-group my-2 mb-5 ' type="password" onBlur={hadlePass} placeholder='re-enter password' name="re-pass" id="pass" />
                            {passError ? <p className='text-danger text-center'>{passError}</p> : ''}

                            <button className='btn btn-primary d-block px-5 mx-auto mt-2  mb-5'>Register </button>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>

            <Modal show={Lshow} onHide={handleCloseL}>
                <Modal.Header closeButton>
                    <h2 className='mx-auto ps-5'>Welcome Back</h2>
                </Modal.Header>
                <Modal.Body>
                    <Container className='py-2'>
                        {/* Login form */}
                        <h2 className='text-start fs-3 fw-bold'>Sign in to your account</h2>
                        <form className='mt-3  py-3' onSubmit={handleLoginSubmit}>
                            {/* <label htmlFor="">Email</label>
                            <input required className='input-group mt-2 mb-3 ' type="text" onChange={handleOnChangeL} placeholder='email' name="email" id="email" /> */}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mt-2 mb-5 text-start"
                            >
                                <Form.Control type="email" className="text-start" placeholder="name@example.com" name='email' onChange={handleOnChangeL} />
                            </FloatingLabel>

                            {/* ---------------- */}
                            {/* <label htmlFor="">Password</label>
                            <input required className='input-group mt-2 mb-5 ' type="password" onChange={handleOnChangeL} placeholder='password' name="pass" id="pass" /> */}
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start" name="pass" placeholder="Password" onChange={handleOnChangeL} />
                            </FloatingLabel>
                            {error ? <p className='text-danger text-center'>{error}</p> : ''}

                            <button className='btn btn-primary d-block mx-auto my-3 px-5 '>Login </button>
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
