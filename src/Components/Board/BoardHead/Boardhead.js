import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import logo from '../../images/logos/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

export default function Boardhead() {


    // offcanvas
    // const [showOff, setShowOff] = useState(false);

    // const handleOff = () => setShowOff(false);
    // const handleOn = () => setShowOff(true);

    const { user, admin, tutor, isLoading, logOut } = useAuth();



    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <>
            <Navbar  fluid collapseOnSelect expand="lg" bg="white" variant="light">
                <Container fluid>
                    {/* {user.displayName && <span onClick={'handleOn'} className='fs-2 pe-3'>  <GiHamburgerMenu /></span>} */}
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
                    {/* <h2 className="text-center mx-auto">Welcome</h2> */}
                    <Navbar.Collapse id="responsive-navbar-nav">

                        {user.displayName && <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                        <Nav className="fw-bold ms-auto">
                            {user.displayName && <Nav.Link onClick={logOut}>LogOut</Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* offcanvas */}
            {/* <Offcanvas className='ss' show={showOff} onHide={handleOff}>
                <Offcanvas.Body>
                    <div class="d-flex flex-column  mb-3">
                        {admin && <NavLink to='/dashboard'> <div className=" py-2"><br /><span className="littleFont">admin</span></div></NavLink>
                        }
                        {admin && <NavLink to='/dashboard/adtutor'><div className="py-2 "><br /><span className="littleFont">Tutor</span></div></NavLink>
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas> */}
        </>

    )
}
