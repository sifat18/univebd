import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function Edit() {
    const [course, setCourse] = useState({});
    const { id } = useParams()
    // let id = '628bc15e47e402f188798c67'
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/course/${id}`).then(res => res.json()).then(data => setCourse(data))
    }, [id])
    // const handleOnChangeL = (index, e) => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newCourse = { ...course };
    //     newCourse.Module[index][field] = value;
    //     // setCourse(newCourse);
    //     console.log(newCourse)

    // }
    // const handleOnChange = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newCourse = { ...course };
    //     newCourse[field] = value;
    //     // setCourse(newCourse);
    //     console.log(newCourse)

    // }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    // const [module, setModule] = useState([
    //     { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '', qOP11: '', qOP12: '', qOP13: '', qOP14: '', qOP21: '', qOP22: '', qOP23: '', qOP24: '', qOP31: '', qOP32: '', qOP33: '', qOP34: '', qOP41: '', qOP42: '', qOP43: '', qOP44: '', qOP51: '', qOP52: '', qOP53: '', qOP54: '', show_mod: true }
    // ])
    // const submit = (e) => {
    //     e.preventDefault();
    //     let Finalcourse = { ...course }
    //     // Finalcourse.Module = [...module]
    //     // setCourse(Finalcourse)

    //     console.log(Finalcourse)
    //     // axios.post(`https://fierce-woodland-01411.herokuapp.com/courses`, Finalcourse).then(res => res.data ? handleShow() : '')

    // }
    return (
        <>  <Header />
            <Container fluid className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* basic info starts here */}

                    <Row className='bg-secondary pb-3'>
                        <h3 className="my-3 py-3 text-light text-center">Basic Course Information</h3>
                        <Col xs={12} md={3} className='courseFormpad' >
                            {/* <input
                                name='coursename'
                                placeholder='Course_Name'
                                className=''
                                onChange={handleOnChange}
                                value={course?.coursename} /> */}
                            <input required placeholder='name' defaultValue={course?.coursename} className='reservation  ' {...register("coursename")} />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad'>
                            {/* <textarea
                                name='about'
                                placeholder='About_course'
                                rows='5'
                                cols='40'
                                className=''
                                value={course?.about}
                                onChange={handleOnChange}
                            /> */}
                            <textarea rows='4' required placeholder='description' defaultValue={course?.about} className='reservation  '{...register("about")} />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad'>
                            {/* <input
                                name='imageLink'
                                placeholder='Image_Link'
                                className=''
                                value={course?.imageLink}
                                onChange={handleOnChange} /> */}
                            <input required placeholder='name' defaultValue={course?.imageLink} className='reservation  ' {...register("imageLink")} />
                        </Col>
                        <Col xs={12} md={3} className='courseFormpad'>
                            {/* <input
                                name='demoLink'
                                placeholder='Demo_Link'
                                className=''
                                value={course?.demoLink}
                                onChange={handleOnChange} /> */}
                            <input required placeholder='name' defaultValue={course?.demoLink} className='reservation  ' {...register("demoLink")} />
                        </Col>
                    </Row>
                    {/* basic ends here */}


                    {course?.Module?.map((input, index) => (
                        //    {/* module start here */}

                        <div className="my-5 ps-5 bg-secondary  py-2" key={index}>
                            <Row>
                                <Col xs={12} md={4} className='text-center pt-2'>
                                    <h3 className="my-2 mx-2 text-light ">Course Modules {index + 1}</h3>
                                </Col>
                                <Col xs={12} md={4} className='text-center pt-2'>
                                    {/* <input
                                        name='module_name'
                                        placeholder='Module_name'
                                        value={input.module_name}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.module_name} className='reservation  ' {...register("module_name")} />
                                </Col>
                                <Col xs={12} md={4} className='text-center pt-2'>
                                    {/* <textarea
                                        name='module_description'
                                        placeholder='About_mdoule'
                                        rows='5'
                                        cols='80'
                                        className='mx-5'
                                        value={input.module_description}
                                        onChange={event => handleOnChangeL(index, event)} /> */}

                                    <textarea required rows='4' placeholder='name' defaultValue={input.module_description} className='reservation  ' {...register("module_description")} />
                                </Col>
                            </Row>

                            {/* sub module stats here */}
                            {/* sub module 1 */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>sub module 1</h2>

                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    {/* <input
                                        name='sub_mod1'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod1}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_mod1} className='reservation  ' {...register("sub_mod1")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>

                                    {/* <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description1}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <textarea required rows='4' placeholder='name' defaultValue={input.sub_description1} className='reservation  ' {...register("sub_description1")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    {/* <input
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video1}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_video1} className='reservation  ' {...register("sub_video1")} />
                                </Col>
                            </Row>

                            {/* sub module 2 */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>sub module 2</h2>

                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    {/* <input
                                        name='sub_mod2'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod2}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_mod2} className='reservation  ' {...register("sub_mod2")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>
                                    {/* 
                                    <textarea
                                        name='sub_description2'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description2}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <textarea required rows='4' placeholder='name' defaultValue={input.sub_description2} className='reservation  ' {...register("sub_description2")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    {/* <input
                                        name='sub_video2'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video2}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_video2} className='reservation  ' {...register("sub_video2")} />
                                </Col>
                            </Row>
                            {/* sub module 3  */}
                            <Row>
                                <h2 className='text-light mt-5 text-center'>sub module 3</h2>

                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module name</p>
                                    {/* <input
                                        name='sub_mod3'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod3}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_mod3} className='reservation  ' {...register("sub_mod3")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module description</p>

                                    {/* <textarea
                                        name='sub_description3'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description3}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <textarea required rows='4' placeholder='name' defaultValue={input.sub_description3} className='reservation  ' {...register("sub_description3")} />
                                </Col>
                                <Col className='courseFormpad'>
                                    <p className='text-light ps-3'>sub module video</p>
                                    {/* <input
                                        name='sub_video3'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video3}
                                        onChange={event => handleOnChangeL(index, event)} /> */}
                                    <input required placeholder='name' defaultValue={input.sub_video3} className='reservation ' {...register("sub_video3")} />
                                </Col>
                            </Row>
                            {/* add quiz */}
                            <Row className='gx-5 mx-auto my-3 py-3'>
                                <h2 className='text-light'>Add Quizes</h2>
                                {/* quiz 1 */}
                                <Col xs={12} >
                                    <div className='dflex'>
                                        <p className='text-light pt-3 ps-3'> Question 1</p>
                                        {/* <input
                                            name='q1'
                                            placeholder='Question'
                                            className='mb-3'
                                            value={input.q1}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.q1} className='reservation my-3' {...register("q1")} />
                                        <p className='text-light pt-3 ps-3'>Answer 1</p>
                                        {/* <input
                                            name='qA1'
                                            placeholder='Answer'
                                            className='mb-3'
                                            value={input.qA1}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qA1} className='reservation ' {...register("qA1")} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        {/* <input
                                            name='qOP11'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP11}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP11} className='reservation ' {...register("qOP11")} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        {/* <input
                                            name='qOP12'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP12}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP12} className='reservation ' {...register("qOP12")} />

                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        {/* <input
                                            name='qOP13'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP13}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP13} className='reservation' {...register("qOP13")} />

                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        {/* <input
                                            name='qOP14'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP14}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP14} className='reservation ' {...register("qOP14")} />
                                    </div>


                                </Col >
                                <Col xs={12} >
                                    <div className='dflex'>


                                        <p className='text-light pt-3 ps-3'> Question 2</p>
                                        {/* <input
                                            name='q2'
                                            placeholder='Question'
                                            className='mb-3'
                                            value={input.q2}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.q2} className='reservation my-3' {...register("q2")} />
                                        <p className='text-light pt-3 ps-3'>Answer 2</p>
                                        {/* <input
                                            name='qA2'
                                            placeholder='Answer'
                                            className='mb-3'
                                            value={input.qA2}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qA2} className='reservation ' {...register("qA2")} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        {/* <input
                                            name='qOP21'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP21}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP21} className='reservation ' {...register("qOP21")} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        {/* <input
                                            name='qOP22'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP22}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP22} className='reservation ' {...register("qOP22")} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        {/* <input
                                            name='qOP23'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP23}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP23} className='reservation ' {...register("qOP23")} />

                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        {/* <input
                                            name='qOP24'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP24}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP24} className='reservation ' {...register("qOP24")} />
                                    </div>

                                </Col>
                                <Col xs={12}>
                                    <div className='dflex'>
                                        <p className='text-light pt-3 ps-3'> Question 3 </p>
                                        {/* <input
                                            name='q3'
                                            placeholder='Question'
                                            className=''
                                            value={input.q3}
                                            onChange={event => handleOnChangeL(index, event)} /> */}

                                        <input required placeholder='name' defaultValue={input.q3} className='reservation my-3' {...register("q3")} />
                                        <p className='text-light pt-3 ps-3'>Answer 3</p>
                                        {/* <input
                                            name='qA3'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA3}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qA3} className='reservation ' {...register("qA3")} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        {/* <input
                                            name='qOP31'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP31}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP31} className='reservation ' {...register("qOP31")} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        {/* <input
                                            name='qOP32'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP32}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP32} className='reservation ' {...register("qOP32")} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        {/* <input
                                            name='qOP33'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP33}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP33} className='reservation ' {...register("qOP33")} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        {/* <input
                                            name='qOP34'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP34}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP34} className='reservation ' {...register("qOP34")} />
                                    </div>
                                </Col>
                                <Col xs={12} >

                                    <div className='dflex'>
                                        <p className='text-light pt-3 ps-3'>Question 4 </p>
                                        {/* <input
                                            name='q4'
                                            placeholder='Question'
                                            className=''
                                            value={input.q4}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.q4} className='reservation my-3' {...register("q4")} />

                                        <p className='text-light pt-3 ps-3'>Answer 4</p>
                                        {/* <input
                                            name='qA4'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA4}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qA4} className='reservation' {...register("qA4")} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        {/* <input
                                            name='qOP41'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP41}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP41} className='reservation ' {...register("qOP41")} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        {/* <input
                                            name='qOP42'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP42}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP42} className='reservation ' {...register("qOP42")} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        {/* <input
                                            name='qOP43'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP43}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP43} className='reservation ' {...register("qOP43")} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        {/* <input
                                            name='qOP44'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP44}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP44} className='reservation ' {...register("qOP44")} />
                                    </div>
                                </Col>
                                <Col xs={12} >

                                    <div className='dflex'>
                                        <p className='text-light pt-3 ps-3'> Question 5</p>
                                        {/* <input
                                            name='q5'
                                            placeholder='Question'
                                            className=''
                                            value={input.q5}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.q5} className='reservation my-3' {...register("q5")} />
                                        <p className='text-light pt-3 ps-3'>Answer 5</p>
                                        {/* <input
                                            name='qA5'
                                            placeholder='Answer'
                                            className=''
                                            value={input.qA5}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qA5} className='reservation ' {...register("qA5")} />
                                        <p className='text-light pt-3 ps-3'>Choice 1</p>
                                        {/* <input
                                            name='qOP51'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP51}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP51} className='reservation ' {...register("qOP51")} />
                                        <p className='text-light pt-3 ps-3'>Choice 2</p>
                                        {/* <input
                                            name='qOP52'
                                            placeholder='choice'
                                            className='mb-3'
                                            value={input.qOP52}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP52} className='reservation ' {...register("qOP52")} />
                                        <p className='text-light pt-3 ps-3'>Choice 3</p>
                                        {/* <input
                                            name='qOP53'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP53}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP53} className='reservation ' {...register("qOP53")} />
                                        <p className='text-light pt-3 ps-3'>Choice 4</p>
                                        {/* <input
                                            name='qOP54'
                                            placeholder='choice'
                                            className=''
                                            value={input.qOP54}
                                            onChange={event => handleOnChangeL(index, event)} /> */}
                                        <input required placeholder='name' defaultValue={input.qOP54} className='reservation ' {...register("qOP54")} />
                                    </div>
                                </Col>
                                {/* </div> */}

                            </Row>
                        </div>
                    ))}
                    <div className="my-5 d-flex justify-content-around">
                        <input className='reservation   bg-danger text-bg' type="submit" />

                        {/* <Button variant='success' onClick={submit}>Submit</Button> */}
                        {/* <Button variant='warning' onClick={addFields}>Add Module..</Button> */}
                    </div>
                </form>

            </Container>
            <Footer />
        </>
    )
}
