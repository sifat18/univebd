import { useState } from 'react';
import axios from 'axios';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import './addcourse.css'
import Header from '../Header/Header'

export default function CourseAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        window.location.reload(true);
    };
    const handleShow = () => setShow(true);
    const [module, setModule] = useState([
        { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '' }
    ])
    const handleFormChange = (index, event) => {
        let data = [...module];
        data[index][event.target.name] = event.target.value;
        setModule(data)
    }
    const addFields = () => {
        let newModule = { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '' }
        setModule([...module, newModule])
    }
    const submit = (e) => {
        e.preventDefault();
        let Finalcourse = { ...course }
        Finalcourse.Module = [...module]
        setCourse(Finalcourse)

        console.log(Finalcourse)
        axios.post(`https://fierce-woodland-01411.herokuapp.com/courses`, course).then(res => res.data ? handleShow() : '')

    }
    const [course, setCourse] = useState({});
    const handleOnChangeL = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCourse = { ...course };
        newCourse[field] = value;
        setCourse(newCourse);
        // console.log(loginData)

    }
    return (
        <>
            <Header />
            <Container className=''>
                <form onSubmit={submit} >
                    <div className="mt-5 d-flex align-items-center ps-5 bg-secondary pt-3 pb-5">
                        <h3 className="my-2 text-light">Basic Course Information</h3>
                        <input
                            name='coursename'
                            placeholder='Course_Name'
                            className=''
                            onChange={handleOnChangeL}
                        />
                        <textarea
                            name='about'
                            placeholder='About_course'
                            rows='5'
                            cols='40'
                            className=''
                            onChange={handleOnChangeL}
                        />
                        <input
                            name='imageLink'
                            placeholder='Image_Link'
                            className=''
                            onChange={handleOnChangeL} />
                        <input
                            name='demoLink'
                            placeholder='Demo_Link'
                            className=''
                            onChange={handleOnChangeL} />
                    </div>
                    {/* module start here */}
                    {module.map((input, index) => (
                        <div className="my-5 ps-5 bg-secondary  py-2" key={index}>
                            <div className="d-flex align-items-center">
                                <h3 className="my-2 mx-2 text-light">Course Modules {index + 1}</h3>
                                <input
                                    name='module_name'
                                    placeholder='Module_name'
                                    value={input.module_name}
                                    onChange={event => handleFormChange(index, event)} />
                                <textarea
                                    name='module_description'
                                    placeholder='About_mdoule'
                                    rows='5'
                                    cols='80'
                                    className='mx-5'
                                    value={input.module_description}
                                    onChange={event => handleFormChange(index, event)} />
                            </div>
                            <div className="d-flex justify-content-around align-items-center my-4">

                                <h2 className='text-light mt-5'>sub module 1</h2>
                                <div>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod1'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className=''>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>
                            <div className="d-flex justify-content-around align-items-center my-4">
                                <h2 className='text-light mt-5'>sub_module 2</h2>
                                <div>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod2'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className=''>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description2'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video2'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>
                            <div className="d-flex justify-content-around align-items-center my-4">
                                <h2 className='text-light mt-5'>sub_module 3</h2>
                                <div>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod3'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className=''>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description3'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video3'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>
                            <Row className='gx-5 mx-auto my-3 pb-3'>
                                <h2 className='text-light'>Add Quizes</h2>

                                <Col>
                                    <div>
                                        <p className='text-light'> Question 1</p>
                                        <input
                                            name='q1'
                                            placeholder='Question'
                                            className=''
                                            value={input.q1}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light'>Answer 1</p>
                                        <input
                                            name='qA1'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA1}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                    <div>
                                        <p className='text-light'>Question 4 </p>
                                        <input
                                            name='q4'
                                            placeholder='Question'
                                            className=''
                                            value={input.q4}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light'>Answer 4</p>
                                        <input
                                            name='qA4'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA4}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>


                                        <p className='text-light'> Question 2</p>
                                        <input
                                            name='q2'
                                            placeholder='Question'
                                            className=''
                                            value={input.q2}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light'>Answer 2</p>
                                        <input
                                            name='qA2'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA2}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                    <div>
                                        <p className='text-light'> Question 5</p>
                                        <input
                                            name='q5'
                                            placeholder='Question'
                                            className=''
                                            value={input.q5}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light'>Answer 5</p>
                                        <input
                                            name='qA5'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA5}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col> <Col>
                                    <div>
                                        <p className='text-light'> Question 3 </p>
                                        <input
                                            name='q3'
                                            placeholder='Question'
                                            className=''
                                            value={input.q3}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light'>Answer 3</p>
                                        <input
                                            name='qA3'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA3}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col>
                                {/* </div> */}

                            </Row>
                        </div>
                    ))}
                    <div className="my-5 d-flex justify-content-around">
                        <Button variant='success' onClick={submit}>Submit</Button>
                        <Button variant='warning' onClick={addFields}>Add Module..</Button>
                    </div>
                </form>

            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Course Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>We have a new Course !!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}