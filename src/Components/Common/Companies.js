import React from 'react'
import { Col, Row } from 'react-bootstrap'

import logo1 from '../images/logos/pixelated-bsrm.jpg'
import logo2 from '../images/logos/pixelated-ep.jpg'
import logo3 from '../images/logos/pixelated-max.jpeg'
import logo4 from '../images/logos/pixelated-MGI_Logo.png'
import logo5 from '../images/logos/pixelated-muspana.jpeg'
import logo6 from '../images/logos/pixelated-shanta.png'
import logo7 from '../images/logos/pixelated-square.jpg'
export default function Companies() {
    return (
        <Row className='my-5 gx-2 text-center'>
            <Col xs={12} md={2}>
                <img className='img-fluid py-5' src={logo1} alt="" height='150' width='150' />
            </Col>
            <Col xs={12} md={2}>
                <img className='img-fluid py-5' src={logo2} alt="" height='150' width='150' />
            </Col>
            <Col xs={12} md={2}>
                <img className='img-fluid py-5' src={logo3} alt="" height='150' width='150' />
            </Col>
            <Col xs={12} md={2}>
                <img className='img-fluid py-5' src={logo4} alt="" height='150' width='150' />
            </Col>
            <Col xs={12} md={1}>
                <img className='img-fluid py-5' src={logo5} alt="" height='250' width='250' />
            </Col>
            <Col xs={12} md={2}>
                <img className='img-fluid py-5' src={logo6} alt="" height='150' width='150' />
            </Col>
            <Col xs={12} md={1}>
                <img className='img-fluid ' src={logo7} alt="" height='150' width='150' />
            </Col>

        </Row>
    )
}
