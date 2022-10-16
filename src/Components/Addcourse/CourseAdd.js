import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import './addcourse.css';


export default function CourseAdd() {
    const [imgLink, setImgLink] = useState(null);
    const imageStorageKey='a3a4f59a1a4c29023ff43f75bd8f551d'
   
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
    // modal display state initialize
    const [show, setShow] = useState(false);
    //    modal close 
    const handleClose = () => {
        setShow(false)
        window.location.reload(true);
    };

    const handleShow = () => setShow(true);
    // module information initialization
    const [module, setModule] = useState([
        { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '', qOP11: '', qOP12: '', qOP13: '', qOP14: '', qOP21: '', qOP22: '', qOP23: '', qOP24: '', qOP31: '', qOP32: '', qOP33: '', qOP34: '', qOP41: '', qOP42: '', qOP43: '', qOP44: '', qOP51: '', qOP52: '', qOP53: '', qOP54: '', show_mod: true, mod_complete: false }
    ])
    // storing module info 
    const handleFormChange = (index, event) => {
        let data = [...module];
        data[index][event.target.name] = event.target.value;
        setModule(data)
    }
    // adding new empty module 
    const addFields = () => {
        let newModule = { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '', qOP11: '', qOP12: '', qOP13: '', qOP14: '', qOP21: '', qOP22: '', qOP23: '', qOP24: '', qOP31: '', qOP32: '', qOP33: '', qOP34: '', qOP41: '', qOP42: '', qOP43: '', qOP44: '', qOP51: '', qOP52: '', qOP53: '', qOP54: '', show_mod: true, mod_complete: false }
        setModule([...module, newModule])
    }
    // send the data to database
    const submit = (e) => {
        e.preventDefault();
        let Finalcourse = { ...course }
        Finalcourse.imageLink=imgLink
        Finalcourse.Module = [...module]
        setCourse(Finalcourse)
        // https://fierce-woodland-01411.herokuapp.com
        console.log(Finalcourse)
        axios.post(`https://fierce-woodland-01411.herokuapp.com/api/courses`, Finalcourse).then(res => res.data ? handleShow() : '')

    }
    const [course, setCourse] = useState({});
    // stores the general info that is outside the loop
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

            <section>
                <form onSubmit={submit} >
                    {/* basic info starts here */}

                    <Row className='formBg pb-3'>
                        <h3 className="my-3 py-3 text-light text-center">Basic Course Information</h3>
                        <div className='d-md-flex '>
    <p className='w-100 text-white'>Course Name
    <input
                                name='coursename'
                                placeholder='Course Name'
                                className='border border-secondary w-100 courseFormpad'
                                onChange={handleOnChangeL}
                            />
  </p>
  <p className='w-100 text-white'>Demo Link
    <input
                                name='demoLink'
                                placeholder='Demo Link'
                                className='border border-secondary w-100 courseFormpad'
                                onChange={handleOnChangeL} />
  </p>
  </div>
  <Row>
  <div className='d-md-flex '>
  <p className='w-100 text-white'>About course
    <textarea
                                name='about'
                                placeholder='About Course'
                                rows='70'
                                cols='50'
                                className='border border-secondary w-100'
                                onChange={handleOnChangeL}
                            />
  </p>
      <Form.Group controlId="formFile" className="ms-2 mb-3 w-100">
        <Form.Label className='ms-3 text-white'>Course logo </Form.Label>
        <Form.Control type="file" onChange={e => generateImageLink(e.target.files[0])}/>
      </Form.Group>
   
  </div>
  </Row>
                        {/* <Col xs={12} md={3} className='courseFormpad' >
                            <input
                                name='coursename'
                                placeholder='Course_Name'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col> */}
                        {/* <Col xs={12} md={3} className='courseFormpad'>
                            <textarea
                                name='about'
                                placeholder='About_course'
                                rows='5'
                                cols='40'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col> */}
                        {/* <Col xs={12} md={3} className='courseFormpad'>
                            <input
                                name='imageLink'
                                placeholder='Image_Link'
                                className=''
                                onChange={handleOnChangeL} />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad'>
                            <input
                                name='demoLink'
                                placeholder='Demo_Link'
                                className=''
                                onChange={handleOnChangeL} />
                        </Col> */}
                    </Row>
                    {/* basic ends here */}
                    {/* summary */}
                    <h3 className="my-3 py-3 text-dark text-center"> Course Summary</h3>
                    <Row className='formBg  py-3'>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <input
                                name='total_modules'
                                placeholder='Total Modules'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <input
                                name='total_quizes'
                                placeholder='Total Quizes'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <input
                                name='course_length'
                                placeholder='Course Length'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <input
                                name='course_level'
                                placeholder='Course Level'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad mt-3' >
                            <input
                                name='tag'
                                placeholder='Tag'
                                className=''
                                onChange={handleOnChangeL}
                            />
                        </Col>
                    </Row>
                    {module.map((input, index) => (
                        //    {/* module start here */}
                        <Row className="my-5  formBg  py-2" key={index}>
                            <Row>
                                    <h3 className="my-2 mx-2 text-light text-center">Course Module {index + 1}</h3>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Module Name
    <input
                                        name='module_name'
                                        placeholder='Module Name'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.module_name}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  <p className='w-100 text-white'>About Mdoule
  <textarea
                                        name='module_description'
                                        placeholder='About Mdoule'
                                        rows='70'
                                        cols='50'
                                        className='border border-secondary w-100'
                                        value={input.module_description}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
                                {/* <Col xs={12} md={4} className='text-center pt-2'>
                                    <input
                                        name='module_name'
                                        placeholder='Module_name'
                                        value={input.module_name}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                                {/* <Col xs={12} md={3} className='text-center   pt-2'>
                                    <textarea
                                        name='module_description'
                                        placeholder='About_mdoule'
                                        rows='5'
                                        cols='30'
                                        className='me-3'
                                        value={input.module_description}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                            </Row>

                            {/* sub module stats here */}
                            {/* sub module 1 */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>Sub Module 1</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub Module Name
    <input
                                        name='sub_mod1'
                                        placeholder='Sub Module Name'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_mod1}
                                        onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Sub Module Video
  <input
                                        name='sub_video1'
                                        placeholder='Module Video'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_video1}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub_Module_Description</p>

                                    <textarea
                                        name='sub_description1'
                                        placeholder='About Submdoule'
                                        rows='15'
                                        cols='30'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_description1}
                                        onChange={event => handleFormChange(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod1'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod1}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description1}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video1}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                            </Row>

                            {/* sub module 2 */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>Sub Module 2</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub Module Name
    <input
                                        name='sub_mod2'
                                        placeholder='Sub Module Name'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_mod2}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  <p className='w-100 text-white'>Sub Module Video
  <input
                                        name='sub_video2'
                                        placeholder='Module Video'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_video2}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub Module Description</p>

                                    <textarea
                                        name='sub_description2'
                                        placeholder='About Submdoule'
                                        value={input.sub_description2}
                                        rows='15'
                                        cols='30'
                                        className='border border-secondary w-100 courseFormpad'
                                        onChange={event => handleFormChange(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod2'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod2}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description2'
                                        placeholder='About_submdoule'
                                        value={input.sub_description2}
                                        rows='3'
                                        cols='30'
                                        className=''
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video2'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video2}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                            </Row>
                            {/* sub module 3  */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>Sub Module 3</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub Module Name
    <input
                                        name='sub_mod3'
                                        placeholder='Sub Module Name'
                                        className='border border-secondary w-100 courseFormpad'
                                        value={input.sub_mod3}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  <p className='w-100 text-white'>Sub Module Video
  <input
                                        name='sub_video3'
                                        placeholder='Module Video'
                                        className='border border-secondary w-100 courseFormpad'

                                        value={input.sub_video3}
                                        onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub Module Description</p>

                                    <textarea
                                       name='sub_description3'
                                       placeholder='About Submdoule'
                                       value={input.sub_description3}
                                        rows='15'
                                        cols='30'
                                        className='border border-secondary w-100 courseFormpad'
                                        onChange={event => handleFormChange(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    <input
                                        name='sub_mod3'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod3}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>

                                    <textarea
                                        name='sub_description3'
                                        placeholder='About_submdoule'
                                        value={input.sub_description3}
                                        rows='3'
                                        cols='30'
                                        className=''
                                        onChange={event => handleFormChange(index, event)} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    <input
                                        name='sub_video3'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video3}
                                        onChange={event => handleFormChange(index, event)} />
                                </Col> */}
                            </Row>
                            {/* add quiz */}
                            <Row className='gx-5 mx-auto my-3 py-3'>
                                <h2 className='text-light text-center'>Add Quizzes</h2>
                                {/* quiz 1 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 1
    <input
                                            name='q1'
                                            placeholder='Question 1'
                                        className='border border-secondary w-100 courseFormpad'
                                            value={input.q1}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 1
  <input
                                            name='qA1'
                                            placeholder='Answer 1'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qA1}
                                            onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 1
    <input
                                            name='qOP11'
                                            placeholder='choice 1'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP11}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <input
                                            name='qOP12'
                                            placeholder='choice 2'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP12}
                                            onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 3
    <input
                                            name='qOP13'
                                            placeholder='choice 3'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP13}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <input
                                            name='qOP14'
                                            placeholder='choice 4'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP14}
                                            onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
   {/* <Col  >
                                    <div className=''>
                                        <p className='text-light pt-3 ps-3'> Question 1</p>
                                        <input
                                            name='q1'
                                            placeholder='Question'
                                            className='mb-3'
                                            value={input.q1}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light pt-3 ps-3'>Answer 1</p>
                                        <input
                                            name='qA1'
                                            placeholder='Answer'
                                            className='mb-3'
                                            value={input.qA1}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        <input
                                            name='qOP11'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP11}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        <input
                                            name='qOP12'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP12}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        <input
                                            name='qOP13'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP13}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        <input
                                            name='qOP14'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP14}
                                            onChange={event => handleFormChange(index, event)} />

                                    </div>


                                </Col > */}
                                {/* quiz-2 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 2
    <input
                                            name='q2'
                                            placeholder='Question 2'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.q2}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 2
  <input
                                            name='qA2'
                                            placeholder='Answer 2'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qA2}
                                            onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 1
    <input
                                            name='qOP21'
                                            placeholder='choice 1'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP21}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <input
                                            name='qOP22'
                                            placeholder='choice 2'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP22}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
          <input
              name='qOP23'
              placeholder='choice 3'
              className='border border-secondary w-100 courseFormpad'
           value={input.qOP23}
              onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <input
           name='qOP24'
           placeholder='choice 4'
           className='border border-secondary w-100 courseFormpad'
           value={input.qOP24}
           onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
                                {/* <Col  >
                                    <div className=''>


                                        <p className='text-light pt-3 ps-3'> Question 2</p>
                                        <input
                                            name='q2'
                                            placeholder='Question'
                                            className='mb-3'
                                            value={input.q2}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light pt-3 ps-3'>Answer 2</p>
                                        <input
                                            name='qA2'
                                            placeholder='Answer'
                                            className='mb-3'
                                            value={input.qA2}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        <input
                                            name='qOP21'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP21}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        <input
                                            name='qOP22'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP22}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        <input
                                            name='qOP23'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP23}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        <input
                                            name='qOP24'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP24}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>

                                </Col> */}
                                {/* quiz-3 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 3
    <input
                                            name='q3'
                                            placeholder='Question 3'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.q3}
                                            onChange={event => handleFormChange(index, event)} />  

  </p>
  <p className='w-100 text-white'>Answer 3
  <input
                                            name='qA3'
                                            placeholder='Answer 3'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qA3}
                                            onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <input
                                            name='qOP31'
                                            placeholder='choice'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP31}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <input
                                            name='qOP32'
                                            placeholder='choice'
                                            className='border border-secondary w-100 courseFormpad'
                                            value={input.qOP32}
                                            onChange={event => handleFormChange(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <input
                name='qOP33'
                placeholder='choice'
                className='border border-secondary w-100 courseFormpad'
                value={input.qOP33}
                onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <input
          name='qOP34'
          placeholder='choice'
          className='border border-secondary w-100 courseFormpad'
          value={input.qOP34}
          onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
                                {/* <Col>
                                    <div className=''>
                                        <p className='text-light pt-3 ps-3'> Question 3 </p>
                                        <input
                                            name='q3'
                                            placeholder='Question'
                                            className=''
                                            value={input.q3}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light pt-3 ps-3'>Answer 3</p>
                                        <input
                                            name='qA3'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA3}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        <input
                                            name='qOP31'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP31}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        <input
                                            name='qOP32'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP32}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        <input
                                            name='qOP33'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP33}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        <input
                                            name='qOP34'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP34}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col> */}
                                {/* quiz-4 */}
                                <div className='d-md-flex'>
    <p className='w-100 text-white'>Question 4
    <input
            name='q4'
            placeholder='Question'
            className='border border-secondary w-100 courseFormpad'
            value={input.q4}
            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 4
  <input
          name='qA4'
          placeholder='Answer'
          className='border border-secondary w-100 courseFormpad'
          value={input.qA4}
          onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <input
        name='qOP41'
        placeholder='choice'
        className='border border-secondary w-100 courseFormpad'
        value={input.qOP41}
        onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <input
         name='qOP42'
         placeholder='choice'
         className='border border-secondary w-100 courseFormpad'
         value={input.qOP42}
         onChange={event => handleFormChange(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <input
            name='qOP43'
            placeholder='choice'
            className='border border-secondary w-100 courseFormpad'
            value={input.qOP43}
            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <input
         name='qOP44'
         placeholder='choice'
         className='border border-secondary w-100 courseFormpad'
         value={input.qOP44}
         onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
                                {/* <Col  >

                                    <div className=''>
                                        <p className='text-light pt-3 ps-3'>Question 4 </p>
                                        <input
                                            name='q4'
                                            placeholder='Question'
                                            className=''
                                            value={input.q4}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light pt-3 ps-3'>Answer 4</p>
                                        <input
                                            name='qA4'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA4}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        <input
                                            name='qOP41'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP41}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        <input
                                            name='qOP42'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP42}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        <input
                                            name='qOP43'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP43}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        <input
                                            name='qOP44'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP44}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col> */}
                                {/* quiz-5 */}
                                <div className='d-md-flex'>
    <p className='w-100 text-white'>Question 5
    <input
           name='q5'
           placeholder='Question'
           className='border border-secondary w-100 courseFormpad'
           value={input.q5}
           onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 5
  <input
        name='qA5'
        placeholder='Answer'
        className='border border-secondary w-100 courseFormpad'
        value={input.qA5}
        onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <input
            name='qOP51'
            placeholder='choice'
            className='border border-secondary w-100 courseFormpad'
            value={input.qOP51}
            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <input
        name='qOP52'
        placeholder='choice'
        className='border border-secondary w-100 courseFormpad'
        value={input.qOP52}
        onChange={event => handleFormChange(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <input
            name='qOP53'
            placeholder='choice'
            className='border border-secondary w-100 courseFormpad'
            value={input.qOP53}
            onChange={event => handleFormChange(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <input
         name='qOP54'
         placeholder='choice'
         className='border border-secondary w-100 courseFormpad'
         value={input.qOP54}
         onChange={event => handleFormChange(index, event)} />
  </p>
  </div>
                                {/* <Col xs={6} >

                                    <div className=''>
                                        <p className='text-light pt-3 ps-3'> Question 5</p>
                                        <input
                                            name='q5'
                                            placeholder='Question'
                                            className=''
                                            value={input.q5}
                                            onChange={event => handleFormChange(index, event)} />

                                        <p className='text-light pt-3 ps-3'>Answer 5</p>
                                        <input
                                            name='qA5'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA5}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        <input
                                            name='qOP51'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP51}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        <input
                                            name='qOP52'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP52}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        <input
                                            name='qOP53'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP53}
                                            onChange={event => handleFormChange(index, event)} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        <input
                                            name='qOP54'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP54}
                                            onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </Col> */}
                                {/* </div> */}

                            </Row>
                        </Row>
                    ))}
                    <div className="my-5 d-flex justify-content-around">
                        {/* buttong for sumbmitting and addning new modules */}
                        <Button variant='success' onClick={submit}>Submit</Button>
                        <Button variant='warning' onClick={addFields}>Add Module..</Button>
                    </div>
                </form>

            </section>
            {/* display modal upon submission */}
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