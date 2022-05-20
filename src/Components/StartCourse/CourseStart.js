import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Videos from '../Common/Videos'
import Header from '../Header/Header'

export default function CourseStart() {
    const [course, setcourses] = useState({})
    const [video, setVideo] = useState('')
    const { courseID } = useParams()

    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/course/${courseID}`).then(res => res.json()).then(data => setcourses(data))
    }, [courseID])
    // console.log(course);

    const sendVideo = (video) => {
        setVideo(video);
    }
    return (
        <>
            <Header />
            <Container fluid className='my-5'>
                <Row>
                    <Col xs={3} md={3} className='border-end border-dark'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                            {course?.Module?.map((data, index) => (
                                <Accordion.Item eventKey={'' + index} key={index} >

                                    <Accordion.Header>{data.module_name}</Accordion.Header>
                                    <Accordion.Body >
                                        <ul>
                                            <li onClick={() => data.show_mod && sendVideo(data.sub_video1)}>{data.sub_mod1}</li>
                                            <li onClick={() => data.show_mod && sendVideo(data.sub_video2)}>{data.sub_mod2}</li>
                                            <li onClick={() => data.show_mod && sendVideo(data.sub_video3)}>{data.sub_mod3}</li>
                                        </ul>
                                    </Accordion.Body>

                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col xs={3} md={9}>
                        <Videos basic={course.demoLink} link={video} />
                    </Col>
                </Row >
            </Container >
        </>
    )
}
