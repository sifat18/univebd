import axios from 'axios'
import { useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactCardFlip from "react-card-flip"
import { NavLink } from 'react-router-dom'
import useAuth from '../Context/useAuth'
import ar from '../images/icons8-arrow-.png'
import st from '../images/steps.png'
// card style
const CardStyle = {
    border: "1px solid black",
    // padding: "20px",
    margin: "20px",
    height: "310px"
  };
export default function CourseCard({id}) {
// user info
    const { user, admin } = useAuth()
    // local state
    const [isFlipped, setIsFlipped] = useState(false);
//    function to delete course 
    const deleteCourse = (id) => {
        const {_id,...rest}=id
        console.log(rest)
        axios.delete(`https://api.unive.com.bd/api/course/${id.coursename}`).then(res => {
            if (res.data.acknowledged) {
                axios.post(`https://api.unive.com.bd/api/deletedcourses`, rest).then(res => res.data ? window.location.reload(true):console.log('erro at delete'))
                //;
            }
        })
    }
    return (
        <Col key={id._id}>
     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront card-shadow border-0  "
      >
        <Card.Img variant="top" className='img-fluid ' src={id.imageLink} />
        <p className='jobText text-start text-primary  ms-2 '>Unive</p>
                <p className='jobText  fw-bold text-center text-decoration-underline'>{id.coursename}</p>
      </Card>
      <Card
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack card-shadow border-0" >
    <Card.Body className='text-start '>
                <p className='jobText '>Unive</p>
                <Card.Title className='jobText fw-bold'>{id.coursename}</Card.Title>
                <Card.Text className='jobText'>{id.about.slice(0, 100)+'...'}              </Card.Text>
            </Card.Body>
            <Row>
                <Col xs={admin ? 4 : 6}>
                    <p><img src={st} alt="" height={25} /></p>
                    <p className=' jobText'>Beginner</p>
                </Col>
                <Col xs={admin ? 8 : 6} className='d-flex justify-content-around'>
                    <NavLink to={`/learn/${id.coursename}`}> <Button className='p-1 jobText' variant="outline-dark">Preview <img src={ar} alt="" /></Button></NavLink>
                    {admin && <NavLink to={`/dashboard/edit/${id.coursename}`}> <Button className='p-1 jobText' variant="outline-success">Edit Course <img src={'ar'} alt="" /></Button></NavLink>}

                </Col>
            </Row>
            {admin &&  <Card.Footer className="text-muted"><Button className='p-1  jobText' variant="outline-danger" onClick={()=>deleteCourse(id)}>Delete Course <img src={'ar'} alt="" /></Button></Card.Footer>}
      </Card>
    </ReactCardFlip>
       
    </Col>
    )
}
