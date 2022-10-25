import { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import scholarshipPic from '../images/scholarship/graduation.png'

export default function Scholarships() {
  const [scholarShipData, setScholarShipData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pdf, setPdf] = useState(null);
  const [choice, setChoice] = useState('Highest Level of Qualification ');
  function handleSelectChange(event) {
    setChoice(event.target.value);
    handleOnChange(event)
  }
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...scholarShipData };
    newRegisterData[field] = value;
    setScholarShipData(newRegisterData);
    console.log(newRegisterData)

  }
  const scholarshipSubmit = (e) => {
    console.log('hit');
    e.preventDefault();
    let formData = new FormData();
    // iterating over the object to transform it into formdata
    Object.keys(scholarShipData).forEach(key => formData.append(key, scholarShipData[key]));
    formData.append('pdf', pdf);
    // checking if form getting the values
    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    // 
    fetch('https://api.unive.com.bd/api/scholarship', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          handleShow()
        } else {
          console.error('Error2');

        }
      })
  }
  return (
    <><Header />
      <Container className='my-5'>
        <Row>
          {/* briefing  */}
          <Col xs={12} md={5}>
            <h2 className='fs-1 fw-bold'>GET <br />SCHOLARSHIP <br />WITH US</h2>
            <img className='img-fluid my-3' src={scholarshipPic} alt="" srcset="" />
            <p className='my-5 fs-4'>Unive provides scholarships to candidates who show exceptional learning and implementation capabilities. If you feel like you are eligible for a scholarship, please fill up the form. Our team will contact you shortly.
            </p>
          </Col>
          {/* form */}
          <Col xs={12} md={7}>
            <form className='text-center mx-2  py-3 ' onSubmit={scholarshipSubmit}>
              <h2 className='text-center fw-bold mt-2 mb-5'> Please fill out the Informations</h2>
              <FloatingLabel
                controlId="floatingInput"
                label="Full Name"
                className="mt-2 mb-5 text-start"
              >
                <Form.Control type="text" name="FullName" className="text-start" placeholder="Jane doe" onChange={handleOnChange} />
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

              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number"
                className="mt-2 mb-5 text-start"
              >
                <Form.Control type="number" name="PhoneNumber" className="text-start" placeholder="01299123" onChange={handleOnChange} />
              </FloatingLabel>
              {/* ----------- */}
              <Form.Select className='ms-2' aria-label="Educational qualification:" name='edu_qualification' onChange={handleSelectChange} value={choice}>
                <option>Highest Level of Qualification</option>
                <option value="S.S.C">S.S.C</option>
                <option value="H.S.C">H.S.C</option>
                <option value="Graduate">Graduate</option>
                <option value="Diploma">Diploma</option>
              </Form.Select>
              {/* ------------------ */}
              <FloatingLabel className='my-5' controlId="floatingTextarea2" label="What do you want to learn in this platform">
                <Form.Control
                  name='platform_learn'
                  className='text-start'
                  as="textarea"
                  placeholder="What do you want to learn in this platform"
                  style={{ height: '100px' }}
                  onChange={handleOnChange} />
              </FloatingLabel>
              {/* ------------ */}
              <FloatingLabel className='mt-5 mb-3' controlId="floatingTextarea2" label="Why do you need a scholarship">
                <Form.Control
                  name='scholarship_need'
                  as="textarea"
                  className='text-start'
                  placeholder="Why do you need a scholarship"
                  style={{ height: '100px' }}
                  onChange={handleOnChange} />
              </FloatingLabel>
              <Form.Group controlId="formFile" className="text-start ms-2 mb-3">
                <Form.Label >CV (if any)</Form.Label>
                <Form.Control className="text-start" type="file" accept="application/pdf" onChange={e => setPdf(e.target.files[0])} />
              </Form.Group>
              <button className='btn btn-primary d-block w-100 mx-auto mt-2 py-3 ms-2 mb-5'>Submit </button>
            </form>
          </Col>
        </Row>
      </Container>

      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will shortly get in contact with you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

