import React from 'react'
import { Button as p, Container, Ratio } from 'react-bootstrap'

export default function Videos({ link, basic, handl2, breif, show }) {
    return (
        <>
            <Container className='text-center'>
                <Ratio aspectRatio="16x9">
                    <iframe src={link || basic}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='Xray'
                        width="788" height="500"
                    />
                </Ratio >
                {breif && <div className="my-5 ms-5 ps-5 d-none d-md-block text-start">
                    <h2 className='fw-bold '>Module description</h2>
                    <hr className='' />
                    <p className=' fs-5 text-dark'>{breif}</p>
                </div>}
                {breif && <div className="my-5 d-block d-md-none text-start">
                    <h2 className='fw-bold '>Module description</h2>
                    <hr className='' />
                    <p className=' fs-5 text-dark'>{breif}</p>
                </div>}
                {show &&
                    <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={handl2}> Go to Quiz</p>
                }
            </Container>
        </>
    )
}
