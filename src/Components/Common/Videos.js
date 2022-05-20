import React from 'react'
import { Container } from 'react-bootstrap'

export default function Videos({ link, basic }) {
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
            </Container>
        </>
    )
}
