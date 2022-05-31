import React, { useState } from 'react'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import scholarshipPic from '../images/scholarship/graduation.png'

export default function Scholarships() {
  const [scholarShipData, setScholarShipData] = useState({});
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
    e.preventDefault();
    // let Finalcourse = { ...course }
    // Finalcourse.Module = [...module]
    // setCourse(Finalcourse)

    console.log(scholarShipData)
    // axios.post(`https://fierce-woodland-01411.herokuapp.com/courses`, course).then(res => res.data ? handleShow() : '')
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
            <form className='mx-auto  py-3 ' onSubmit={scholarshipSubmit}>

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
              <FloatingLabel className='my-5 ' controlId="floatingTextarea2" label="Why do you need a scholarship">
                <Form.Control
                  name='scholarship_need'
                  as="textarea"
                  className='text-start'
                  placeholder="Why do you need a scholarship"
                  style={{ height: '100px' }}
                  onChange={handleOnChange} />
              </FloatingLabel>
              <p className='btn btn-primary d-block py-3 px-5 mx-auto mt-2  mb-5'>Register </p>
            </form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

