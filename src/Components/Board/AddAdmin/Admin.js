import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Button, Table } from 'react-bootstrap';
import './admin.css'
const Admin = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }
    const [users, setUser] = useState([])
    useEffect(() => {
      fetch(`https://fierce-woodland-01411.herokuapp.com/api/users`).then(res => res.json()).then(data => {
        setUser(data)
      })
    }, [])

    // setting the admin role in db
    const handleAddAdmin = e => {
        e.preventDefault()
        // const user = { email };fierce-woodland-01411.herokuapp.com
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/admin/${email}`).then(res => res.data.modifiedCount ? handleShow() : '')

    }


    return (
        <Container >
            <h2 data-aos="fade-down-right" className='text-center'>Add An Admin</h2>
            <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddAdmin}>
                <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder=' Email' name="email" id="email" />
                <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
            </form>


            <Table striped bordered hover resonsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((m, idx) => (
                        m.role==="admin" &&
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.displayName}</td>
                        <td>{m.email}</td>
                        <td>{m.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

            {/* modal for showing confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>We have a new admin in the house!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Admin;