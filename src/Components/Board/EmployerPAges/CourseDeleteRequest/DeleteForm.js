import axios from 'axios';
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap';

export default function DeleteForm() {
//   local state
    const [data, setData] = useState({});
// modal displaying functions and states
    const [showT, setShowT] = useState(false);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => setShowT(true)
    // function to get input fields value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    // function to submit form data

    const handleSubmit = e => {
        e.preventDefault()
        console.log(data);

        axios.post(`https://api.unive.com.bd/api/course_delete`, data).then(res => res.data ? handleShowT() : '')

    }
    return (
        <Container className='py-2'>
            {/*  form */}
            <form className='mt-3  py-3' onSubmit={handleSubmit}>
                {/* -----Contact Person Name--- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Contact Person Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="FullName" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----Course Name----- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Course Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="course" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------Email address----- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------Phone------- */}

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------------  */}
                <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
            </form>
            {/* modal */}
            <Modal show={showT} onHide={handleCloseT}>
                <Modal.Header closeButton>
                    <Modal.Title>Waiting for Unive Approval</Modal.Title>
                </Modal.Header>
                <Modal.Body>One of our representatives will get back to you asap.</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseT}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
  )
}
