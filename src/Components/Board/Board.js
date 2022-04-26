import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Boardhead from './BoardHead/Boardhead'

export default function Board() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Boardhead />
                </Row>
                <Row>
                    <Outlet />
                </Row>
            </Container>
        </>
    )
}
