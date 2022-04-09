import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../images/educate.png'
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

                    <Navbar.Brand href="#home">
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
                        <Nav className="me-auto fw-bold">
                            {/* <Nav.Link href="#home">Solution</Nav.Link> */}
                            <NavDropdown title="Solution" id="navbarScrollingDropdown" >
                                <NavLink to='/business'>    <NavDropdown.Item href="#action3">Developer team</NavDropdown.Item></NavLink>
                                <NavLink to='/individual-learner'> <NavDropdown.Item href="#action4">Developers</NavDropdown.Item></NavLink>
                            </NavDropdown>
                            <NavDropdown title="Products" id="navbarScrollingDropdown" >
                                <NavLink to='/upskill'> <NavDropdown.Item href="#action3">Learning for teams</NavDropdown.Item></NavLink >
                                <NavLink to='/upskill'><NavDropdown.Item href="#action4">Learning for individuals</NavDropdown.Item></NavLink >
                                <NavLink to='/onboarding'><NavDropdown.Item href="#action3">Onboarding</NavDropdown.Item></NavLink >
                                <NavLink to='/upskill'><NavDropdown.Item href="#action4">Assesments</NavDropdown.Item></NavLink >
                                <NavLink to='/learning-plans'><NavDropdown.Item href="#action3">Personalized learning plans</NavDropdown.Item></NavLink >
                                <NavLink to='/projects'><NavDropdown.Item href="#action4">Projects</NavDropdown.Item></NavLink >
                            </NavDropdown>
                            <NavDropdown title="Pricing" id="navbarScrollingDropdown" >
                                <NavDropdown.Item href="#action3">for individuals</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">for teams</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
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
