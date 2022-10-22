import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const [imgLink, setImgLink] = useState(null);
    const imageStorageKey='a3a4f59a1a4c29023ff43f75bd8f551d'
//    generate image
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
    const [course, setCourse] = useState({});
    const [module, setModule] = useState([]);
    const { id } = useParams()
    // let id = '628bc15e47e402f188798c67'
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        window.location.reload(true);
    };
    const handleShow = () => setShow(true);
// loading data
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/course/${id}`).then(res => res.json()).then(data => {
            setCourse(data)
            setModule(data.Module)
        })
    }, [id])
    // console.log(module)
    // changing module values 
    const handleOnChangeL = (index, e) => {
        let data = [...module];
        data[index][e.target.name] = e.target.value;
        setModule(data);

    }
    // changing general information not in a loop
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCourse = { ...course };
        newCourse[field] = value;
        setCourse(newCourse);
        console.log(newCourse)

    }
    // adding new module array
    const addFields = () => {
        let newModule = {
            module_name: "",
            module_description: "",
            sub_mod1: "",
            sub_mod2: "",
            sub_mod3: "",
            sub_video1: "",
            sub_video2: "",
            sub_video3: "",
            sub_description1: "",
            sub_description2: "",
            sub_description3: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            qA1: "",
            qA2: "",
            qA3: "",
            qA4: "",
            qA5: "",
            qOP11: "",
            qOP12: "",
            qOP13: "",
            qOP14: "",
            qOP21: "",
            qOP22: "",
            qOP23: "",
            qOP24: "",
            qOP31: "",
            qOP32: "",
            qOP33: "",
            qOP34: "",
            qOP41: "",
            qOP42: "",
            qOP43: "",
            qOP44: "",
            qOP51: "",
            qOP52: "",
            qOP53: "",
            qOP54: "",
            show_mod: true,
        };
        setModule([...module, newModule]);
    };
    // sending the edited data to db
    const submit = (e) => {
        e.preventDefault();
        let Finalcourse = { ...course }
        Finalcourse.imageLink=imgLink || course.imageLink
        delete Finalcourse.Module;
        Finalcourse.Module = [...module]
        setCourse(Finalcourse)  //https://fierce-woodland-01411.herokuapp.com/

        console.log(Finalcourse)
        axios.put(`https://fierce-woodland-01411.herokuapp.com/api/courses/edit/${id}`, Finalcourse).then(res => res.data ? handleShow() : '')

    }
    return (
        <>
            <section fluid className=''>
                <form onSubmit={submit}>
                    {/* basic info starts here */}

                    <Row className='formBg pb-3'>
                        <h3 className="my-3 py-3 text-white text-center">Basic Course Information</h3>
                        <div className='d-md-flex '>
    <p className='w-100 text-white'>Course_Name
    <FormControl type="text"
                                name='coursename'
                                placeholder='Course_Name'
                                className='border border-secondary w-100 courseFormpad'
                                onChange={handleOnChange}
                                defaultValue={course?.coursename} />
  </p>
  <p className='w-100 text-white'>Demo_Link
  <FormControl
                                type='text'
                                name='demoLink'
                                placeholder='Demo_Link'
                                className='border border-secondary w-100 courseFormpad'
                                defaultValue={course?.demoLink}
                                onChange={handleOnChange} />
  </p>
  </div>
  <div className='d-md-flex '>
  <p className='w-100 text-white'>About_course
  <textarea
                                name='about'
                                placeholder='About_course'
                                rows='5'
                                cols='50'
                                className='form-control border border-secondary w-100'
                                defaultValue={course?.about}
                                onChange={handleOnChange}
                            />
                           
  </p>
      <Form.Group controlId="formFile" className="ms-2 mb-3 w-100">
        <Form.Label className='ms-3 text-white'>Course logo </Form.Label>
        <Form.Control type="file" onChange={e => generateImageLink(e.target.files[0])}/>
      </Form.Group>
   
  </div>
                        
                    </Row>
                    {/* basic ends here */}

                    <h3 className="my-3 py-3 text-dark text-center"> Course Summary</h3>
                    <Row className='formBg  py-3'>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <FormControl
                                type='text'
                                name='total_modules'
                                placeholder='total_modules'
                                className=''
                                defaultValue={course?.total_modules}
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <FormControl
                                type='text'
                                name='total_quizes'
                                placeholder='total_quizes'
                                className=''
                                defaultValue={course?.total_quizes}
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <FormControl
                                type='text'
                                name='course_length'
                                placeholder='course_length'
                                className=''
                                defaultValue={course?.course_length}
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad' >
                            <FormControl
                                type='text'
                                name='course_level'
                                placeholder='course_level'
                                className=''
                                defaultValue={course?.course_level}
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad mt-3' >
                            <FormControl
                                type='text'
                                name='tag'
                                placeholder='tag'
                                className=''
                                defaultValue={course?.tag}
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Row>
                    {/* summary ends */}

                    {module?.map((input, index) => (
                        //    {/* module start here */}

                        <Row className="my-5  formBg  py-2" key={index}>
                            <Row>
                                    <h3 className="my-2 text-center  text-white ">Course Modules {index + 1}</h3>
                                    <div className='d-md-flex '>
    <p className='w-100 text-white'>Module_name
    <FormControl
            type='text'
            name='module_name'
            className='border border-secondary w-100'
            placeholder='Module_name'
            defaultValue={input.module_name}
            onChange={event => handleOnChangeL(index, event)} />
  </p>
  <p className='w-100 text-white'>About_Mdoule
  <textarea
                                        name='module_description'
                                        placeholder='About_mdoule'
                                        rows='7'
                                        cols='40'
                                        className=' form-control border border-secondary w-100'
                                        defaultValue={input.module_description}
                                        onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                 {/* <Col xs={12} md={4} className='text-center pt-2'>
                                    <FormControl
                                        type='text'
                                        name='module_name'
                                        placeholder='Module_name'
                                        defaultValue={input.module_name}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col> */}
                                {/* <Col xs={12} md={4} className='text-center pt-2'>
                                    <textarea
                                        name='module_description'
                                        placeholder='About_mdoule'
                                        rows='5'
                                        cols='80'
                                        className=' form-control'
                                        defaultValue={input.module_description}
                                        onChange={event => handleOnChangeL(index, event)} />
                                </Col> */}
                            </Row>

                            {/* sub module stats here */}
                            {/* sub module 1 */}
                            <Row>
                                <h2 className='text-white mt-5 text-center'>Sub-Module-1</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub_Module_Name
    <FormControl
                                        type='text'
                                        name='sub_mod1'
                                        className='border border-secondary w-100 courseFormpad'
                                        placeholder='sub_module_name'
                                        defaultValue={input.sub_mod1}
                                        onChange={event => handleOnChangeL(index, event)} />
  </p>
  <p className='w-100 text-white'>Sub_Module_Video
  <FormControl
                                        type='text'
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className='border border-secondary w-100 courseFormpad'
                                        defaultValue={input.sub_video1}
                                        onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub_Module_Description</p>

  <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className='form-control border border-secondary w-100 courseFormpad'
                                        defaultValue={input.sub_description1}
                                        onChange={event => handleOnChangeL(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Name</p>
                                    <FormControl
                                        type='text'
                                        name='sub_mod1'
                                        placeholder='sub_module_name'
                                        defaultValue={input.sub_mod1}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Description</p>

                                    <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className='form-control'
                                        defaultValue={input.sub_description1}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Video</p>
                                    <FormControl
                                        type='text'
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className=''
                                        defaultValue={input.sub_video1}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col> */}
                            </Row>

                            {/* sub module 2 */}
                            <Row>
                                <h2 className='text-dark mt-5 text-center'>Sub-Module-2</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub_Module_Name
    <FormControl
                type='text'
                name='sub_mod2'
                placeholder='sub_module_name'
                className='border border-secondary w-100 courseFormpad'
                defaultValue={input.sub_mod2}
                onChange={event => handleOnChangeL(index, event)} />
  </p>
  <p className='w-100 text-white'>Sub_Module_Video
  <FormControl
              type='text'
              name='sub_video2'
              placeholder='Module_Video'
              className='border border-secondary w-100 courseFormpad'
              defaultValue={input.sub_video2}
              onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub_Module_Description</p>

  <textarea
            name='sub_description2'
            placeholder='About_submdoule'
            rows='5'
            cols='30'
            className='form-control border border-secondary w-100 courseFormpad'
            defaultValue={input.sub_description2}
            onChange={event => handleOnChangeL(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Name</p>
                                    <FormControl
                                        type='text'
                                        name='sub_mod2'
                                        placeholder='sub_module_name'
                                        defaultValue={input.sub_mod2}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Description</p>

                                    <textarea
                                        name='sub_description2'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className='form-control'
                                        defaultValue={input.sub_description2}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Video</p>
                                    <FormControl
                                        type='text'
                                        name='sub_video2'
                                        placeholder='Module_Video'
                                        className=''
                                        defaultValue={input.sub_video2}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col> */}
                            </Row>
                            {/* sub module 3  */}
                            <Row>
                                <h2 className='text-white mt-5 text-center'>Sub-Module-3</h2>
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Sub_Module_Name
    <FormControl
                type='text'
                name='sub_mod3'
                className='border border-secondary w-100 courseFormpad'
                placeholder='sub_module_name'
                defaultValue={input.sub_mod3}
                onChange={event => handleOnChangeL(index, event)} />
  </p>
  <p className='w-100 text-white'>Sub_Module_Video
  <FormControl
                type='text'
                name='sub_video3'
                placeholder='Module_Video'
                className='border border-secondary w-100 courseFormpad'
                defaultValue={input.sub_video3}
                onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <p className='text-light ps-3'>Sub_Module_Description</p>

  <textarea
            name='sub_description3'
            placeholder='About_submdoule'
            rows='5'
            cols='30'
            className='form-control border border-secondary w-100 courseFormpad'
            defaultValue={input.sub_description3}
            onChange={event => handleOnChangeL(index, event)} />
                                {/* <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Name</p>
                                    <FormControl
                                        type='text'
                                        name='sub_mod3'
                                        placeholder='sub_module_name'
                                        defaultValue={input.sub_mod3}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Description</p>

                                    <textarea
                                        name='sub_description3'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className='form-control'
                                        defaultValue={input.sub_description3}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-dark ps-3'>Sub-Module-Video</p>
                                    <FormControl
                                        type='text'
                                        name='sub_video3'
                                        placeholder='Module_Video'
                                        className=''
                                        defaultValue={input.sub_video3}
                                        onChange={event => handleOnChangeL(index, event)} />

                                </Col> */}
                            </Row>
                            {/* add quiz */}
                            <Row className='gx-5 mx-auto my-3 py-3'>
                                <h2 className='text-white text-center'>Add Quizzes</h2>
                                {/* quiz 1 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 1
    <FormControl
                                            type='text'
                                            name='q1'
                                            placeholder='Question'
                                            className='border border-secondary w-100 courseFormpad'
                                            defaultValue={input.q1}
                                            onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 1
  <FormControl
                                            type='text'
                                            name='qA1'
                                            placeholder='Answer'
                                            className='border border-secondary w-100 courseFormpad'
                                            defaultValue={input.qA1}
                                            onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 1
    <FormControl type='text' name='qOP11' placeholder='choice' className='border border-secondary w-100 courseFormpad'  defaultValue={input.qOP11}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <FormControl
    type='text'
    name='qOP12'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP12}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 3
    <FormControl
    type='text'
    name='qOP13'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP13}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <FormControl
    type='text'
    name='qOP14'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP14}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                                {/* <Col >
                                    <div className=''>
                                        <p className='text-dark pt-3 ps-3'> Question 1</p>
                                        <FormControl
                                            type='text'
                                            name='q1'
                                            placeholder='Question'
                                            className='mb-3'
                                            defaultValue={input.q1}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Answer 1</p>
                                        <FormControl
                                            type='text'
                                            name='qA1'
                                            placeholder='Answer'
                                            className='mb-3'
                                            defaultValue={input.qA1}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Choice 1</p>
                                        <FormControl
                                            type='text' name='qOP11' placeholder='choice' className='mb-3'
                                            defaultValue={input.qOP11}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 2</p>

                                        <FormControl
                                            type='text'
                                            name='qOP12'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP12}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Choice 3</p>
                                        <FormControl
                                            type='text'
                                            name='qOP13'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP13}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Choice 4</p>
                                        <FormControl
                                            type='text'

                                            name='qOP14'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP14}
                                            onChange={event => handleOnChangeL(index, event)} />
                                    </div>


                                </Col > */}
                                {/* quiz 2 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 2
    <FormControl
    type='text'
    name='q2'
    placeholder='Question'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.q2}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 2
  <FormControl
    type='text'
    name='qA2'
    placeholder='Answer'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qA2}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex '>
    <p className='w-100 text-white'>Choice 1
    <FormControl
    type='text'
    name='qOP21'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP21}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <FormControl
    type='text'
    name='qOP22'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP22}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <FormControl
    type='text'
    name='qOP23'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP23}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <FormControl
    type='text'
    name='qOP24'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP24}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                                {/* <Col >
                                    <div className=''>


                                        <p className='text-dark pt-3 ps-3'> Question 2</p>
                                        <FormControl
                                            type='text'
                                            name='q2'
                                            placeholder='Question'
                                            className='mb-3'
                                            defaultValue={input.q2}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Answer 2</p>
                                        <FormControl
                                            type='text'
                                            name='qA2'
                                            placeholder='Answer'
                                            className='mb-3'
                                            defaultValue={input.qA2}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Choice 1</p>
                                        <FormControl
                                            type='text'
                                            name='qOP21'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP21}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 2</p>
                                        <FormControl
                                            type='text'
                                            name='qOP22'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP22}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 3</p>
                                        <FormControl
                                            type='text'
                                            name='qOP23'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP23}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Choice 4</p>
                                        <FormControl
                                            type='text'
                                            name='qOP24'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP24}
                                            onChange={event => handleOnChangeL(index, event)} />
                                    </div>

                                </Col> */}
                                {/* quiz-3 */}
                                <div className='d-md-flex '>
    <p className='w-100 text-white'>Question 3
    <FormControl
    type='text'
    name='q3'
    placeholder='Question'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.q3}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 3
  <FormControl
    type='text'
    name='qA3'
    placeholder='Answer'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qA3}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <FormControl
    type='text'
    name='qOP31'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP31}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  <p className='w-100 text-white'>Choice 2
  <FormControl
    type='text'
    name='qOP32'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP32}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <FormControl
    type='text'
    name='qOP33'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP33}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <FormControl
    type='text'
    name='qOP34'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP34}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                                {/* <Col >
                                    <div className=''>
                                        <p className='text-dark pt-3 ps-3'> Question 3 </p>
                                        <FormControl
                                            type='text'
                                            name='q3'
                                            placeholder='Question'
                                            className=''
                                            defaultValue={input.q3}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Answer 3</p>
                                        <FormControl
                                            type='text'
                                            name='qA3'
                                            placeholder='Answer'
                                            className=''
                                            defaultValue={input.qA3}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 1</p>
                                        <FormControl
                                            type='text'
                                            name='qOP31'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP31}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 2</p>
                                        <FormControl
                                            type='text'
                                            name='qOP32'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP32}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 3</p>
                                        <FormControl
                                            type='text'
                                            name='qOP33'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP33}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 4</p>
                                        <FormControl
                                            type='text'
                                            name='qOP34'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP34}
                                            onChange={event => handleOnChangeL(index, event)} />
                                    </div>
                                </Col> */}
                                {/* quiz-4 */}
                                <div className='d-md-flex'>
    <p className='w-100 text-white'>Question 4
    <FormControl
    type='text'
    name='q4'
    placeholder='Question'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.q4}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 4
  <FormControl
    type='text'
    name='qA4'
    placeholder='Answer'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qA4}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <FormControl
    type='text'
    name='qOP41'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP41}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <FormControl
    type='text'
    name='qOP42'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP42}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <FormControl
    type='text'
    name='qOP43'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP43}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <FormControl
    type='text'
    name='qOP44'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP44}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                                {/* <Col  >

                                    <div className=''>
                                        <p className='text-dark pt-3 ps-3'>Question 4 </p>
                                        <FormControl
                                            type='text'
                                            name='q4'
                                            placeholder='Question'
                                            className=''
                                            defaultValue={input.q4}
                                            onChange={event => handleOnChangeL(index, event)} />

                                        <p className='text-dark pt-3 ps-3'>Answer 4</p>
                                        <FormControl
                                            type='text'
                                            name='qA4'
                                            placeholder='Answer'
                                            className=''
                                            defaultValue={input.qA4}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 1</p>
                                        <FormControl
                                            type='text'
                                            name='qOP41'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP41}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 2</p>
                                        <FormControl
                                            type='text'
                                            name='qOP42'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP42}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 3</p>
                                        <FormControl
                                            type='text'
                                            name='qOP43'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP43}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 4</p>
                                        <FormControl
                                            type='text'
                                            name='qOP44'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP44}
                                            onChange={event => handleOnChangeL(index, event)} />
                                    </div>
                                </Col> */}
                            {/* quiz-5 */}
                            <div className='d-md-flex'>
    <p className='w-100 text-white'>Question 5
    <FormControl
    type='text'
    name='q5'
    placeholder='Question'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.q5}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Answer 5
  <FormControl
    type='text'
    name='qA5'
    placeholder='Answer'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qA5}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 1
    <FormControl
    type='text'
    name='qOP51'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP51}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 2
  <FormControl
    type='text'
    name='qOP52'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP52}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  </div>
  <div className='d-md-flex'>
    <p className='w-100 text-white'>Choice 3
    <FormControl
    type='text'
    name='qOP53'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP53}
    onChange={event => handleOnChangeL(index, event)} />

  </p>
  <p className='w-100 text-white'>Choice 4
  <FormControl
    type='text'
    name='qOP54'
    placeholder='choice'
    className='border border-secondary w-100 courseFormpad'
    defaultValue={input.qOP54}
    onChange={event => handleOnChangeL(index, event)} />
  </p>
  </div>
                                {/* <Col  >

                                    <div >
                                        <p className='text-dark pt-3 ps-3'> Question 5</p>
                                        <FormControl
                                            type='text'
                                            name='q5'
                                            placeholder='Question'
                                            className=''
                                            defaultValue={input.q5}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Answer 5</p>
                                        <FormControl
                                            type='text'
                                            name='qA5'
                                            placeholder='Answer'
                                            className=''
                                            defaultValue={input.qA5}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 1</p>
                                        <FormControl
                                            type='text'
                                            name='qOP51'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP51}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 2</p>
                                        <FormControl
                                            type='text'
                                            name='qOP52'
                                            placeholder='choice'
                                            className='mb-3'
                                            defaultValue={input.qOP52}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 3</p>
                                        <FormControl
                                            type='text'
                                            name='qOP53'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP53}
                                            onChange={event => handleOnChangeL(index, event)} />
                                        <p className='text-dark pt-3 ps-3'>Choice 4</p>
                                        <FormControl
                                            type='text'
                                            name='qOP54'
                                            placeholder='choice'
                                            className=''
                                            defaultValue={input.qOP54}
                                            onChange={event => handleOnChangeL(index, event)} />
                                    </div>
                                </Col> */}
                                {/* </div> */}

                            </Row>
                        </Row>
                    ))}
                    <div className="my-5 d-flex justify-content-around">
                        {/* <input className='reservation   bg-danger text-bg' type="submit" /> */}

                        <Button variant='success' onClick={submit}>Submit</Button>
                        <Button variant='warning' onClick={addFields}>Add Module..</Button>
                    </div>
                </form>

            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Course edited!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Ok!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
