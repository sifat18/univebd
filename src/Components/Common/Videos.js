import React from 'react'
import { Button as p, Container } from 'react-bootstrap'

export default function Videos({ link, basic, maxMod, handl, nextIndex, nextMod }) {
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
                {nextMod && nextIndex <= maxMod &&
                    <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={() => handl(nextIndex, nextMod)}> Next</p>
                }
            </Container>
        </>
    )
}
