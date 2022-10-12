import axios from 'axios';
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap';
export default function TutorProfile() {
    const [data, setData] = useState({});

    const [showT, setShowT] = useState(false);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => setShowT(true)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(data);

        axios.post(`https://fierce-woodland-01411.herokuapp.com/api/tutorProfile`, data).then(res => res.data ? handleShowT() : '')

    }
    return (
        <Container className='py-2'>
            {/* Login form */}
            <form className='mt-3  py-3' onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="name" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
                </FloatingLabel>
                {/* --------- */}
              
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="email" className="text-start" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ------------- */}

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
                </FloatingLabel>
                {/*------------  */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Topic"
                    className="mt-2 mb-5 text-start"
                >
                    <Form.Control type="text" name="topic" className="text-start" placeholder="xyz" onChange={handleOnChange} />
                </FloatingLabel>
                {/* ----------- */}
                <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
                {/* ----------- */}

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
                <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
            </form>
            {/* modal */}
            <Modal show={showT} onHide={handleCloseT}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks for your interest</Modal.Title>
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
