import React from 'react'
import useAuth from '../Context/useAuth';
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form, Modal, Nav, Navbar, Offcanvas, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
export default function RegisterModal({show,handleClose,error,handleRegisterSubmit,handleOnChange,hadlePass,passError}) {
   

  return (
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
                            <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                            </FloatingLabel>

                            {/* ----------- */}
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start" name="pass" placeholder="Password" onChange={handleOnChange} />
                            </FloatingLabel>
                            {/* --------------- */}
                            <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-5 ">
                                <Form.Control type="password" className="text-start" placeholder='re-enter password' name="re-pass" onBlur={hadlePass} />
                            </FloatingLabel>
                            {/* ----------- */}
                            {passError ? <p className='text-danger text-center'>{passError}</p> : ''}
                              {error.includes('in-use') ? <p className='text-danger text-center'>You are already registered with the email</p> : ''}
                            <button className='btn btn-primary d-block py-3 px-5 mx-auto mt-2  mb-5' >Register </button>
                        </form>
                    </Container>

                </Modal.Body>


            </Modal>
  )
}
