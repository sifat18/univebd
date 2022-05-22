import React from 'react'
import { Button as p, Container } from 'react-bootstrap'

export default function Videos({ link, basic, handl2, breif, show }) {
    return (
        <>
            <Container className='text-center'>
                <iframe src={link || basic}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='Xray'
                    width="788" height="500"
                />
                <div className="my-5 ms-5 ps-5 text-start">
                    <h2 className='fw-bold '>A short description</h2>
                    <hr className='' />
                    <p className=' fs-5 text-dark'>{breif}</p>
                </div>
                {show &&
                    <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={handl2}> Go to Quiz</p>
                }
            </Container>
        </>
    )
}
