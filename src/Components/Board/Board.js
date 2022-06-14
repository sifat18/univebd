import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Boardhead from './BoardHead/Boardhead'

export default function Board() {
    return (
        <>
            <Container fluid>
                <Boardhead />
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}
