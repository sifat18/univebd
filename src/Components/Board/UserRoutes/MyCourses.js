import { Line } from 'rc-progress';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
export default function MyCourses() {
// getting user
    const { user } = useAuth()
    // local state
    const [course, setcourse] = useState([])
//    data load from db
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/order/${user.email}`).then(res => res.json()).then(data => setcourse(data)
        )
    }, [user.email])

    return (
        <Container data-aos="zoom-in" fluid className='py-3 my-5  text-center allorderbg'>

            <h2 className='text-white fs-3 fw-bold text-center mb-3'> My Courses</h2>
            {!course.length && <p className='green fs-3 fw-bold text-center mb-3'> You don't have any pending orders yet!!</p>}
       {/* enrolled course */}
            <Row Row xs={1} md={3} className="g-4 bigMargin" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                {course.map((id) => (
                    <Col key={id?.course?._id}>
                        <Card className='py-1'>
                            <Card.Img variant="top" className='img-fluid ' src={id?.course?.imageLink} />
                            <Card.Body className='text-start'>
                                <p>Unive</p>
                                <Card.Title >{id?.course?.coursename}</Card.Title>
                                <Card.Text>{id?.course?.about.slice(0, 100)}              </Card.Text>
                            </Card.Body>
                            <Row>

                                <Col xs={12} className='d-flex justify-content-around'>
                                    {/* <NavLink to={`/learn/${id?.course?._id}`}> <Button className='p-2 ms-4' variant="outline-dark">Preview <img src={'ar'} alt="" /></Button></NavLink> */}
                                    <p className='w-50'>Course Progress {id?.course?.progress}% <Line percent={id?.course?.progress} trailWidth={4} strokeWidth={4} strokeColor="#267D39" /></p>

                                    <NavLink to={`/learn/start/${id?.course?._id}`}> <Button className='p-2 ' variant="outline-success">Resume Course <img src={'ar'} alt="" /></Button></NavLink>


                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
