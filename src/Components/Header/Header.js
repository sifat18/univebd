import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../images/logos/cropped-small-px-e1638453380416.png'
import arrow from '../images/icons8-arrow-24.png'

export default function Header() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <>
            <Navbar sticky="top" fluid collapseOnSelect expand="lg" bg="white" variant="light">
                <Container fluid>

                    <Navbar.Brand href="#home" className="d-md-none ">
                        <img
                            src={logo}
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="  fw-bold  ">
                            {/* <Nav.Link href="#home">Solution</Nav.Link> */}
                            <Nav.Link className=" mx-3" href="/whyunive">ইউনিভ কেন</Nav.Link>
                            <Nav.Link className=" mx-5" href="#ds">কিভাবে কাজ করে</Nav.Link>

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

                        <Navbar.Brand href="#home" className="d-none d-md-block mx-auto ps-3">
                            <img
                                src={logo}
                                width="100"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="fw-bold ms-auto">
                            <Nav.Link className=" me-5" href="#course">কোর্সসমুহ</Nav.Link>
                            <Nav.Link className=" mx-5" href="#features">যোগাযোগ</Nav.Link>

                        </Nav>

                        <Form className="d-flex ms-auto">
                            <FormControl
                                type="search"
                                placeholder="&#xF002; Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                        <Nav className="fw-bold">
                            <Nav.Link href="#features">Log In</Nav.Link>
                            <Button variant="btn btn-primary">Join For free <img src={arrow} alt="arrow" /></Button>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />

        </>
    )
}
