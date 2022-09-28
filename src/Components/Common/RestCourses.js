import { Col } from 'react-bootstrap'
import CourseCard from './CourseCard'

export default function RestCourses({ show, courses, admin }) {
    return (
        <>

            {courses.map((id) => (
                <Col className={show ? 'd-block' : 'd-none'} key={id._id}>
                   <CourseCard id={id} key={id._id} admin={admin} />
                </Col>
            ))}
        </>
    )
}
