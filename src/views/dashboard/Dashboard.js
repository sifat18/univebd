import './dash.css'

import {

  CCard, CRow
} from '@coreui/react'
// import { CChartLine } from '@coreui/react-chartjs'


import { useEffect, useState } from 'react'
import pic1 from '../../Components/images/icons8-multiply-16.png'
import { Col, Container, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { HiOutlineMinus } from 'react-icons/hi'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FcCheckmark } from 'react-icons/fc'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import useAuth from '../../Components/Context/useAuth'

const Dashboard = () => {
  const { user,admin } = useAuth()

  const [users, setUser] = useState([])
  const [totalUser, setTotalUser] = useState(0)
  useEffect(() => {
    fetch(`https://fierce-woodland-01411.herokuapp.com/api/users`).then(res => res.json()).then(data => {
      setUser(data)
      setTotalUser(data.length)
    })
  }, [])
  const activeUserTotal = users.filter(per => per.active !== false)
  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
            

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        {/* <CCol xs> */}
          <CCard className="mb-4">
           
<Container fluid className='bg-secondary '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.5" d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,245.3C560,267,640,245,720,218.7C800,192,880,160,960,154.7C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>            
                </Container>
                <Container className=''>
                <img src={user.photoURL} alt='user pic' className='img-fluid user-pic mb-5 rounded-circle'/>

             
                </Container>
                <section className=' profile-strength '>
<h5 className='text-center ms-4 pt-5'>Complete your profile to become a Unive Superstar</h5>
 <p className='text-center fs-5 ms-3'>Basic  <HiOutlineMinus className='sv-hieght'/> <HiOutlineMinus className='sv-hieght'/> <HiOutlineMinus className='sv-hieght'/> <HiOutlineMinus className='sv-hieght'/> <HiOutlineMinus className='sv-hieght'/> <span> Super Star <AiTwotoneStar className='text-secondary'/> <AiTwotoneStar className='text-secondary'/> <AiTwotoneStar className='text-secondary'/> </span></p>
                </section>
                <section className=' profile-strength mt-5 '>
<Row className=''>
  <Col xs={12} md={6} className=''>
    <div className=" d-flex justify-content-between align-items-center ">
    <h6 className='ms-3'>About</h6>
    <BsPencilSquare className=' d-block my-2 fs-3 border py-1  '/>
    </div>
    <div className='text-center mx-5 mt-5 mb-5 py-4 borderDotted text-secondary d-flex justify-content-center align-items-center'>
    <div className=''>Tell others about yourself</div>
     
    </div>
  </Col>
  <Col xs={12} md={6} className=''>
    <p className='my-2'>My Job Status</p>
    <div className="w-75 mt-3">
    <Dropdown className=''>
      <Dropdown.Toggle variant="white" id="dropdown-basic" className='border border-dark '>
      <ImCross className='text-warning me-2'/> Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu className='w-75 border-0'>
        <Dropdown.Item href="#/action-1" className='border border-dark '> <div><h5><ImCross className='text-warning me-2 fs-6'/> Closed to offers</h5>
        <p className='text-wrap'>You're not looking and don’t want to hear about new opportunities. Your Jobs profile will be hidden to employers.</p>
        </div></Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='border border-dark disabled'> <div><h5> <FcCheckmark className='fs-4 me-2'/>Open to offers</h5>
        <p className='text-wrap'>You're not looking but open to hear about new opportunities. Your Jobs profile will be visible to employers.</p>
        </div></Dropdown.Item>
        <Dropdown.Item href="#/action-1" className='border border-dark disabled'> <div><h5><IoChatboxEllipsesOutline/> Ready to Interview</h5>
        <p className='text-wrap'>You're actively looking for a new job and ready to interview. Your Jobs profile will be visible to employers.</p>
        </div></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
              </div>
        <p className='pt-3'>Unive Certifications</p>      
    <div className='text-center mb-2 w-75 borderDotted text-secondary'>
    <p className='pt-2  mt-3'> Get certified in your dream  role</p>
    <p className='text-dark fw-bold text-center ms-2'>Visit Certification</p>

    </div>
              </Col>
</Row>
                </section>
                {/* {!admin && <div className="mb-5">
                  <Container>
                    <Row className='text-center'>
                      <p className='fs-3 fw-bold'>You have not published any courses or answers yet.</p>
<img src={dashhome} className='img-fluid' alt=''/>
<p className='fs-3 fw-bold mt-3'>Earn passive income teaching what you love</p>
<p className='fs-4 '>Easy-to-use tools let you create awesome courses and answers with interactivity built right in.</p>
                    </Row>
                  </Container>
                </div>} */}

             
              <br />
              {admin && <Container>
                <p>Total user: {totalUser}</p>
                <p>Total active user: {activeUserTotal.length}</p>
              </Container>}
              {admin &&
                <Table striped bordered hover resonsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((m, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{m.displayName}</td>
                        <td>{m.email}</td>
                        <td>{m.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              }
            {/* </CCardBody> */}
          </CCard>
        {/* </CCol> */}
      </CRow>
    </>
  )
}

export default Dashboard
