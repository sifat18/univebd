import axios from 'axios';
import React, { useState } from 'react'
import { Container, Modal,Button } from 'react-bootstrap';

export default function AddEmployer() {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }
    // setting the admin role in db
    const handleAddEmployer = e => {
        e.preventDefault()
        // const user = { email };fierce-woodland-01411.herokuapp.com
        axios.put(`https://unive.site/api/admin/${email}`).then(res => res.data.modifiedCount ? handleShow() : '')

    }
    return (
        <Container >
            <h2 data-aos="fade-down-right" className='text-center'>Add An Employer</h2>
            <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddEmployer}>
                <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
            </form>
            {/* modal for showing confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Done</Modal.Title>
                </Modal.Header>
                <Modal.Body>Successfully new Employer added!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
