import axios from 'axios';
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form, Modal } from 'react-bootstrap';
export default function TutorProfile() {
    const [data, setData] = useState({});
    const [imgLink, setImgLink] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [error, setError] = useState(null);
    const imageStorageKey='a3a4f59a1a4c29023ff43f75bd8f551d'
    const [showT, setShowT] = useState(false);
    const handleCloseT = () => setShowT(false);
    const handleShowT = () => setShowT(true)
    // generate img link
    const generateImageLink = img => {
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const imgURL = result.data.url;
                setImgLink(imgURL)
    }})}

    const pdfChecker = e => {
        if (e.target.files[0].type !== "application/pdf" || e.target.files[0].size > 2000000){
            setError('not a pdf or size is exceded')
            e.target.value=null
    }else{
        setError('')
       setPdf(e.target.files[0])
    }}

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
        console.log(newUser)

    }
    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData(); 
        data.imgLink=imgLink
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('pdf', pdf);


        fetch('https://fierce-woodland-01411.herokuapp.com/api/tutorProfile', {
            method: 'POST',
            body: formData
          })
            .then(response => response.json())
            .then(data => {
              if (data) {
                handleShowT()
              } else {
                console.error('Error2');
      
              }
            })

        // axios.post(`https://fierce-woodland-01411.herokuapp.com/api/tutorProfile`, formData).then(res => res.data ? handleShowT() : '')

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
        <Form.Label>Profile Picture </Form.Label>
        <Form.Control type="file" onChange={e => generateImageLink(e.target.files[0])}/>
      </Form.Group>
                {/* ----------- */}

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>CV</Form.Label>
        <Form.Control type="file"  onChange={e => pdfChecker(e)}/>
    {error && <p className='text-danger'>{error}</p>}
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
