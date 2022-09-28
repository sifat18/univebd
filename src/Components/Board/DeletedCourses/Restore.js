import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function Restore() {
    const [course, setcourse] = useState([])

    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/deletedcourses`).then(res => res.json()).then(data => setcourse(data)
        )
    }, [])
    const handleRestore=(courseID)=>{
        const {_id,...rest}=courseID
        axios.post(`https://fierce-woodland-01411.herokuapp.com/api/courses`, rest).then(res => {
        if(res.data){
            axios.delete(`https://fierce-woodland-01411.herokuapp.com/api/deletedcourses/${rest.coursename}`).then(res=>res.data.acknowledged? window.location.reload(true):console.log('error at delete'))
        }}
        )
    }
    const deleteCourse = (id) => {
        const {_id,...rest}=id
        console.log(rest)
        axios.delete(`https://fierce-woodland-01411.herokuapp.com/api/deletedcourses/${id.coursename}`).then(res => {
            if (res.data.acknowledged) {
               window.location.reload(true)
            }
        })
    }
  return (
    <Container  fluid className='py-3 my-5  text-center allorderbg'>

    <h2 className='text-white fs-3 fw-bold text-center mb-3'> Deleted Courses</h2>
    <Row Row xs={1} md={3} className="g-4 bigMargin" >
        {course.map((id) => (
            <Col key={id?.course?._id}>
                <Card className='py-1'>
                    <Card.Img variant="top" className='img-fluid ' src={id?.imageLink} />
                    <Card.Body className='text-start'>
                        <p>Unive</p>
                        <Card.Title >{id?.coursename}</Card.Title>
                        <Card.Text>{id?.about.slice(0, 100)}              </Card.Text>
                    </Card.Body>
                    <Row>

                        <Col xs={12} className='d-flex justify-content-around'>
                            
                           
                            <Button className='p-2 ' variant="outline-success" onClick={()=>handleRestore(id)}>Restore <img src={'ar'} alt="" /></Button>
                            <Button className='p-2 text-light' variant="danger" onClick={()=>deleteCourse(id)}>Delete Permanently </Button>


                        </Col>
                    </Row>
                </Card>
            </Col>
        ))}
    </Row>
</Container>

  )
}
