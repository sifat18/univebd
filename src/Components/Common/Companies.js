import React from 'react'
import {  Row } from 'react-bootstrap'
import Slider from "react-slick";
import logo1 from '../images/logos/pixelated-bsrm.jpg'
import logo2 from '../images/logos/pixelated-ep.jpg'
import logo3 from '../images/logos/pixelated-max.jpeg'
import logo4 from '../images/logos/pixelated-MGI_Logo.png'
import logo5 from '../images/logos/pixelated-muspana.jpeg'
import logo6 from '../images/logos/pixelated-shanta.png'
import logo7 from '../images/logos/pixelated-square.jpg'
export default function Companies() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <Row className='my-5  mx-auto text-center'>
            <Slider {...settings}>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto mt-3 pt-5 ' src={logo1} alt="" height='150' width='150' />

                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto mt-2 pt-5' src={logo2} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto pt-5' src={logo3} alt="" height='150' width='150' />
                </div>
                <div>
                    <img className='img-fluid mx-auto my-auto pt-5' src={logo4} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto pt-3' src={logo5} alt="" height='250' width='250' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto pt-5 mt-2' src={logo6} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto pt-5 ' src={logo7} alt="" height='150' width='150' />
                </div>
            </Slider>
            {/*             
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
            </Col> */}

        </Row>
    )
}
