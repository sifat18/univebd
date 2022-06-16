import React from 'react'
import {  Row } from 'react-bootstrap'
import Slider from "react-slick";
import logo1 from '../images/logos/abdul monem.png'
import logo2 from '../images/logos/abulkhair.png'
import logo3 from '../images/logos/aci.png'
import logo4 from '../images/logos/AKKHAN.png'
import logo5 from '../images/logos/BSC.png'
import logo6 from '../images/logos/bsrm.png'
import logo7 from '../images/logos/AnandaShipyard.png'
import logo8 from '../images/logos/banglalink.png'
import logo9 from '../images/logos/BG.png'
import logo10 from '../images/logos/Bexi.png'
import logo11 from '../images/logos/bkash.png'
import logo12 from '../images/logos/BTI.png'
import logo13 from '../images/logos/citygroup.png'
import logo14 from '../images/logos/ConcordGrouplogo.png'
import logo15 from '../images/logos/ConfidenceGrouplogo.png'
import logo17 from '../images/logos/Edisongroup.png'
import logo18 from '../images/logos/Energypac.png'
import logo19 from '../images/logos/EskayefBangladesh.png'
import logo20 from '../images/logos/FairElectronics.png'
import logo21 from '../images/logos/foodpanda.png'
import logo22 from '../images/logos/grameenphone.png'
import logo23 from '../images/logos/Jamuna.png'
import logo24 from '../images/logos/kazi.png'
import logo25 from '../images/logos/Karnaphuli.png'
import logo26 from '../images/logos/KhulnaShipyard.png'
import logo27 from '../images/logos/ksrm.png'
import logo28 from '../images/logos/Meghna.png'
import logo29 from '../images/logos/Nasir.png'
import logo30 from '../images/logos/Navana.png'
import logo31 from '../images/logos/orion.png'
import logo32 from '../images/logos/partex.png'
import logo33 from '../images/logos/pathao.png'
import logo34 from '../images/logos/pran.png'
import logo35 from '../images/logos/Rangs.png'
import logo36 from '../images/logos/Reneta.png'
import logo37 from '../images/logos/RFL.png'
import logo38 from '../images/logos/Robi.png'
import logo39 from '../images/logos/RSRM.png'
import logo40 from '../images/logos/Runner.png'
import logo41 from '../images/logos/Sheltech.png'
import logo42 from '../images/logos/Sikder.png'
import logo43 from '../images/logos/Square.png'
import logo44 from '../images/logos/Summit.png'
import logo45 from '../images/logos/TK.png'
import logo46 from '../images/logos/Transcom.png'
import logo47 from '../images/logos/United.png'
import logo48 from '../images/logos/Walton.png'
import logo49 from '../images/logos/Western.png'
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
                    <img className='img-fluid mx-auto my-auto ' src={logo1} alt="" height='150' width='150' />

                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto' src={logo2} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo3} alt="" height='150' width='150' />
                </div>
                <div>
                    <img className='img-fluid mx-auto my-auto' src={logo4} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto  ' src={logo5} alt="" height='250' width='250' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto' src={logo6} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo7} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo8} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo9} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo10} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo11} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo12} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo13} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo14} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo15} alt="" height='150' width='150' />
                </div>
                {/* <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo16} alt="" height='150' width='150' />
                </div> */}
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo17} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo18} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo19} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo20} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo21} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo22} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo23} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo24} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo25} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo26} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo27} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo28} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo29} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo30} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo31} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo32} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo33} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo34} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo35} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo36} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo37} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo38} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo39} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo40} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo41} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo42} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo43} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo44} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo45} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo46} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo47} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo48} alt="" height='150' width='150' />
                </div>
                <div className='  text-center'>
                    <img className='img-fluid mx-auto my-auto ' src={logo49} alt="" height='150' width='150' />
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
