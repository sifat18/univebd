import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function JobPost({job}) {
  return (
    <Container>
       <Row xs={1} md={3} className="g-4 ">
            <Col >
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{job.position}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Col>
            
        </Row>
    </Container>
  )
}
