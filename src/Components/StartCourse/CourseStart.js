import React, { useEffect, useReducer, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Videos from '../Common/Videos'
import Header from '../Header/Header'
import { RiVideoAddLine } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import './start.css'
import Footer from '../Footer/Footer'
import NewQuiz from '../Common/Quiz/NewQuiz'
import useAuth from '../Context/useAuth'
export default function CourseStart() {
    const { user } = useAuth()
    // const initialState = {
    //     course: {},
    //     curIndex: 0,
    //     nex: 0,
    //     nexMod: false,
    //     video: '',
    //     nextV: '',
    //     prev: '',
    //     quiz: false,
    //     show: false,
    //     description: '',
    //     maxModuleIndex: 0,

    // }
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'setData':
    //             console.log('setting')
    //             return { course: action.value, maxModuleIndex: action.value?.Module?.length - 1 };
    //         case 'sub_video1':

    //             return {
    //                 curIndex: action.idx,
    //                 quiz: false,
    //                 preV: '',
    //                 video: action.video,
    //                 description: action.description,

    //             };
    //         case 'sub_video2':

    //             return {
    //                 curIndex: action.idx,
    //                 quiz: false,
    //                 preV: action.prev,
    //                 video: action.video,
    //                 description: action.description,

    //             };
    //         case 'sub_video3':

    //             return {
    //                 curIndex: action.idx,
    //                 quiz: false,
    //                 preV: action.prev,
    //                 video: action.video,
    //                 description: action.description,

    //             };
    //         case 'setDetails':
    //             return {
    //                 show: action.show,
    //                 nex: action.nex,
    //                 nextV: action.nextV,
    //                 nexMod: action.nexMod

    //             }
    //         case 'nextVideo':
    //             return {
    //                 show: action.show,
    //                 quiz: action.quiz,
    //                 nexMod: action.nexMod,
    //                 video: action.video,
    //                 description: action.description,


    //             }
    //         case 'nextModule':
    //             return {
    //                 quiz: action.quiz,


    //             }
    //         default:
    //             return state
    //     }

    // }
    // const [state, dispatch] = useReducer(reducer, initialState)


    const [course, setcourses] = useState({})
    const [curIndex, setcurIndex] = useState(0)
    const [video, setVideo] = useState('')
    const [nextV, setNV] = useState('')
    const [preV, setPV] = useState('')
    const [quiz, setQuiz] = useState(false)
    const [show, setShow] = useState(false)
    const [description, setdescription] = useState('')
    const [nex, setnex] = useState(0)
    const [nexMod, setnexMod] = useState(false)
    const { courseID } = useParams()
    const maxModuleIndex = course?.Module?.length - 1



    // const curIndex = 0
    // https://fierce-woodland-01411.herokuapp.com/course/${courseID}
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/mycourse?_id=${courseID}&email=${user.email}`).then(res => res.json()).then(data => {
            setcourses(data)
            // dispatch({
            //     type: 'setData',
            //     value: data
            // })
        })
    }, [courseID, user.email])
    // console.log(course);
    // console.log(state.course?._id)

    const sendVideo = (data, video, idx = 0, unlock = false) => {
        setQuiz(false)
        setcurIndex(idx)
        // console.log('inside  vi');
        switch (video) {
            case 'sub_video1':
                // dispatch({
                //     type: 'sub_video1',
                //     idx: idx,
                //     video: data.sub_video1,
                //     description: data.sub_description1,

                // })
                setPV('')
                setVideo(data.sub_video1)
                setdescription(data.sub_description1)
                if (!data.sub_mod2 && !data.sub_mod3) {
                    // dispatch({
                    //     type: 'setDetails',
                    //     show: true,
                    //     nex: idx + 1,
                    //     nexMod: true,
                    //     nextV: '',
                    // })

                    setShow(true)
                    setnex(idx + 1)
                    setnexMod(true)
                    setNV('')
                } else {
                    // dispatch({
                    //     type: 'setDetails',
                    //     show: false,
                    //     nex: idx,
                    //     nexMod: unlock,
                    //     nextV: 'sub_video2',
                    // })
                    setnex(idx)
                    setnexMod(unlock)
                    setShow(false)
                    setNV('sub_video2')
                }
                break;
            case 'sub_video2':
                // setPV('sub_video1')
                // dispatch({
                //     type: 'sub_video2',
                //     idx: idx + 1,
                //     video: data.sub_video2,
                //     description: data.sub_description2,
                //     prev: 'sub_video2',

                // })

                setVideo(data.sub_video2)
                setdescription(data.sub_description2)
                if (!data.sub_mod3) {
                    // dispatch({
                    //     type: 'setDetails',
                    //     show: true,
                    //     nex: idx + 1,
                    //     nexMod: true,
                    //     nextV: '',
                    // })
                    setShow(true)
                    setnex(idx + 1)
                    setnexMod(true)
                    setNV('')

                } else {
                    // dispatch({
                    //     type: 'setDetails',
                    //     show: false,
                    //     nex: idx,
                    //     nexMod: unlock,
                    //     nextV: 'sub_video3',
                    // })
                    setnex(idx)
                    setnexMod(unlock)
                    setShow(false)
                    setNV('sub_video3')
                }
                break;
            case 'sub_video3':
                setNV('')
                setPV('sub_video2')
                // dispatch({
                //     type: 'sub_video3',
                //     // idx:idx+1,
                //     video: data.sub_video3,
                //     description: data.sub_description3,
                //     prev: 'sub_video2',

                // })
                // dispatch({
                //     type: 'setDetails',
                //     show: true,
                //     nex: idx + 1,
                //     nexMod: unlock,
                //     nextV: '',
                // })
                setVideo(data.sub_video3)
                setdescription(data.sub_description3)
                setShow(true)
                setnex(idx + 1)
                setnexMod(unlock)
                break;
            default:
        }

    }
    const nextVideo = (index, lock) => {
        course.Module[index].show_mod = lock
        // dispatch({
        //     type: 'nextVideo',
        //     video: state.course.Module[index].sub_video1,
        //     description: state.course.Module[index].sub_description1,
        //     nexMod: false,
        //     quiz: false,
        //     show: false


        // })
        setVideo(course.Module[index].sub_video1)
        setdescription(course.Module[index].sub_description1)
        setnexMod(false)
        setQuiz(false)
        setShow(false)

    }
    // const moduleNavigate = (index, flag) => {
    //     setVideo(course.Module[index].sub_video1)
    //     setdescription(course.Module[index].sub_description1)
    //     flag ? setcurIndex(curIndex + 1) : setcurIndex(curIndex - 1)

    // }

    // back and forth video switching in the same model
    const videoNavigate = (inde, vid) => {

        sendVideo(course.Module[inde], vid, inde, true)
    }
    // enable quiz option
    const nextModule = () => {
        // dispatch({
        //     type: 'nextModule',
        //     quiz: true,
        // })
        setQuiz(true)
    }
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                <Row>
                    <Col md={2} className='border-end border-dark d-none d-md-block'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                            {course.Module?.map((data, index) => (
                                <Accordion.Item eventKey={'' + index} key={index} >

                                    <Accordion.Header>{data.module_name}</Accordion.Header>
                                    <Accordion.Body >
                                        <ul className='nobull courseStartMargin'>
                                            {data.sub_mod1 && <li className='my-2 mod' onClick={() => data.show_mod && sendVideo(data, 'sub_video1', index, false)}><RiVideoAddLine className='fs-3' /> {data.sub_mod1}</li>}
                                            {data.sub_mod2 && <li className='my-2 mod' onClick={() => data.show_mod && sendVideo(data, 'sub_video2', index, false)}><RiVideoAddLine className='fs-3' /> {data.sub_mod2}</li>}
                                            {data.sub_mod3 && <li className='my-2 mod' onClick={() => data.show_mod && sendVideo(data, 'sub_video3', index, true)}> <RiVideoAddLine className='fs-3' /> {data.sub_mod3}</li>}
                                            <li className='  mod'><MdQuiz className='fs-3 ' /> Quiz</li>
                                        </ul>
                                    </Accordion.Body>

                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col xs={12} md={9} className=''>
                        {/* {!state.quiz && <Videos show={state.show} basic={state.course?.demoLink} link={state.video} curIdx={state.curIndex} handl2={nextModule} breif={state.description} videoControl={videoNavigate} nexVideo={state.nextV} preVideo={state.preV} />
                        } */}
                        {!quiz && <Videos show={show} basic={course.demoLink} link={video} curIdx={curIndex} handl2={nextModule} breif={description} videoControl={videoNavigate} nexVideo={nextV} preVideo={preV} />}
                        {/* {state.quiz && <NewQuiz courseData={state.course} nextIndex={state.nex} maxMod={state.maxModuleIndex} handl={nextVideo} nextMod={state.nexMod} /> */}
                        {quiz && <NewQuiz courseData={course} nextIndex={nex} maxMod={maxModuleIndex} handl={nextVideo} nextMod={nexMod} />
                        }
                    </Col>
                    <Col xs={12} className='border-end border-dark d-block d-md-none'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                            {course?.Module?.map((data, index) => (
                                <Accordion.Item eventKey={'' + index} key={index} >

                                    <Accordion.Header>{data.module_name}</Accordion.Header>
                                    <Accordion.Body >
                                        <ul className='nobull courseStartMargin'>
                                            {data.sub_mod1 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video1', index, false)}><RiVideoAddLine className='fs-3' /> {data.sub_mod1}</li>}
                                            {data.sub_mod2 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video2', index, false)}><RiVideoAddLine className='fs-3' /> {data.sub_mod2}</li>}
                                            {data.sub_mod3 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video3', index, true)}> <RiVideoAddLine className='fs-3' /> {data.sub_mod3}</li>}
                                        </ul>
                                    </Accordion.Body>

                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row >
            </Container >
            <Footer />
        </>
    )
}
