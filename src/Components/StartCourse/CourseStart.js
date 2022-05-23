import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Quiz from '../Common/Quiz'
import Videos from '../Common/Videos'
import Header from '../Header/Header'
import { RiVideoAddLine } from "react-icons/ri";

export default function CourseStart() {
    const [course, setcourses] = useState({})
    const [video, setVideo] = useState('')
    const [quiz, setQuiz] = useState(false)
    const [show, setShow] = useState(false)
    const [description, setdescription] = useState('')
    const [nex, setnex] = useState(0)
    const [nexMod, setnexMod] = useState(false)
    const { courseID } = useParams()
    const maxModuleIndex = course?.Module?.length - 1

    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/course/${courseID}`).then(res => res.json()).then(data => setcourses(data))
    }, [courseID])
    // console.log(course);

    const sendVideo = (data, video, idx = 0, unlock = false) => {
        switch (video) {
            case 'sub_video1':
                setVideo(data.sub_video1)
                setdescription(data.sub_description1)
                if (!data.sub_mod2 && !data.sub_mod3) {
                    setShow(true)
                    setnex(idx + 1)
                    setnexMod(true)
                } else {
                    setnex(idx)
                    setnexMod(unlock)
                    setShow(false)
                }
                break;
            case 'sub_video2':
                setVideo(data.sub_video2)
                setdescription(data.sub_description2)
                if (!data.sub_mod3) {
                    setShow(true)
                    setnex(idx + 1)
                    setnexMod(true)
                } else {
                    setnex(idx)
                    setnexMod(unlock)
                    setShow(false)
                }
                break;
            case 'sub_video3':
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
        setVideo(course.Module[index].sub_video1)
        setdescription(course.Module[index].sub_description1)
        setnexMod(false)
        setQuiz(false)
        setShow(false)

    }
    const nextModule = () => {
        setQuiz(true)
    }
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                <Row>
                    <Col xs={3} md={2} className='border-end border-dark'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                            {course?.Module?.map((data, index) => (
                                <Accordion.Item eventKey={'' + index} key={index} >

                                    <Accordion.Header>{data.module_name}</Accordion.Header>
                                    <Accordion.Body >
                                        <ul>
                                            {data.sub_mod1 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video1', index, false)}><RiVideoAddLine className='fs-3' />{data.sub_mod1}</li>}
                                            {data.sub_mod2 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video2', index, false)}><RiVideoAddLine className='fs-3' />{data.sub_mod2}</li>}
                                            {data.sub_mod3 && <li onClick={() => data.show_mod && sendVideo(data, 'sub_video3', index, true)}> <RiVideoAddLine className='fs-3' />{data.sub_mod3}</li>}
                                        </ul>
                                    </Accordion.Body>

                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col xs={3} md={9}>
                        {!quiz && <Videos show={show} basic={course.demoLink} link={video} handl2={nextModule} breif={description} />
                        }
                        {quiz && <Quiz courseData={course} maxMod={maxModuleIndex} handl={nextVideo} nextIndex={nex} nextMod={nexMod} />
                        }
                    </Col>
                </Row >
            </Container >
        </>
    )
}
