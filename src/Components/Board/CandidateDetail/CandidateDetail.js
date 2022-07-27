import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function CandidateDetail() {
    const [details, setDetails] = useState({})
    const { id } = useParams()
    // https://fierce-woodland-01411.herokuapp.com
    useEffect(() => {
        fetch(`https://unive.site/api/candidate/${id}`).then(res => res.json()).then(data => setDetails(data))
    }, [id])
    return (
        <>
            {/* basic info */}
            <section>
                <h3>Basic Information</h3>
                <hr className='' />
                <Table striped bordered hover resonsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Phone</th>
                            <th>URl</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>{details?.basics?.name}</td>
                            <td>{details?.basics?.email}</td>
                            <td>{details?.basics?.label}</td>
                            <td>{details?.basics?.phone}</td>
                            <td>{details?.basics?.url}</td>
                            <td>{details?.basics?.location.address} {details?.basics?.location.postalCode} {details?.basics?.location.city}</td>

                        </tr>
                    </tbody>
                </Table>
            </section>
            {/* skills */}
            <section>
                <h3>Skills Information</h3>
                <hr />
                <Table striped bordered hover resonsive>
                    <thead>
                        <tr>
                            <th>skills</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >

                            <td>{details?.skills?.frameworks.map(x => x.name + ', ') + details?.skills?.databases.map(x => x.name + ', ') + details?.skills?.technologies.map(x => x.name + ', ') + details?.skills?.tools.map(x => x.name + ', ')}</td>
                            <td>{details?.basics?.totalExp}</td>

                        </tr>
                    </tbody>
                </Table>
            </section>
            {/* work info */}
            <section>
                <h3>Work Information</h3>
                <hr />
                <Table striped bordered hover resonsive>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Designation</th>
                            <th>Start date</th>
                            <th>End date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {details?.work?.map(x => <tr><td> {x.name}</td>
                            <td> {x.position}</td>
                            <td> {x.startDate}</td>
                            <td> {x.endDate}</td>
                        </tr>)}

                    </tbody>
                </Table>
            </section>
            {/* education info */}
            <section>
                <h3>Education Information</h3>
                <hr />
                <Table striped bordered hover resonsive>
                    <thead>
                        <tr>
                            <th>Institution</th>
                            <th>Degree</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>


                        {details?.education?.map(x => <tr><td> {x.institution}</td>
                            <td> {x.studyType}</td>
                            <td> {x.startDate}</td>
                            <td> {x.endDate}</td>
                            <td> {x.score}</td>
                        </tr>)}

                    </tbody>
                </Table>
            </section>
        </>
    )
}
