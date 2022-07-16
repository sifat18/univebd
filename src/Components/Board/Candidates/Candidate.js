import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'

export default function Candidate() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/resume`).then(res => res.json()).then(data => setUser(data))
    }, [])
    return (
        <Container>
            <Table striped bordered hover resonsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((m, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{m.basics?.name}</td>
                            <td>{m.basics?.email}</td>
                            <td>{m.basics?.label}</td>
                            <td><Button variant='primary'>View details</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
