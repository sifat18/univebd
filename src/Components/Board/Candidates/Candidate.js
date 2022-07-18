import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'

export default function 
Candidate() {
    const [user, setUser] = useState([])
    const [filter, setFilterData] = useState([])
    const [position, setPosition] = useState('')
    const [sl, setSl] = useState('')
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch(`https://fierce-woodland-01411.herokuapp.com/resume`).then(res => res.json()).then(data => {
            setUser(data)
           setFilterData(data)
           data.map((m, idx)=> (
            setSkills([...skills,...m.skills.frameworks, ...m.skills.databases,...m.skills.technologies,...m.skills.tools])
        ))
            })
    }, [])

    const handsearch=()=>{
        console.log(sl)
        const newData=user.filter(x=>x.basics.label===position)
        // .filter(x=>x.basics.label==(position==''?x.basics.label:position))
        // .filter(y=>y.skills.frameworks.filter(z=>z.name==(sl==''?z.name:sl)))
        setUser(newData)
        console.log(newData)
        }
        // .filter(x=>x.basics.label==position)
        // .filter(x=>x.skills==sl)
        // console.log(newData)
    

    return (
        <Container>
            <Table  resonsive className='my-5 '>
                <tr>
                    <td><input type="text" className='border 'placeholder='...enter position' onChange={(e)=>setPosition(e.target.value)}/></td>
                    {/* <td><input type="text" placeholder='...enter skill' onChange={(e)=>setSl(e.target.value)}/></td> */}
                    <td><Button onClick={handsearch}>search</Button></td>

                </tr>
            </Table>
            <Table striped bordered hover resonsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>skills</th>
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
                            <td>{m.skills.frameworks.map(x=>x.name+', ')+m.skills.databases.map(x=>x.name+', ')+ m.skills.technologies.map(x=>x.name+', ')+m.skills.tools.map(x=>x.name+', ')}</td>
                            <td><Button variant='primary'>View details</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
