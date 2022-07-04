import React from 'react'
import 'core-js'
import './style.scss'
import { Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
// import Footer from '../Footer/Footer'
import AppSidebar from './AppSidebar/AppSidebar'
// import Boardhead from './BoardHead/Boardhead'
import { Provider } from 'react-redux'
import store from '../../store'
export default function Board() {
    return (
        <Provider store={store}>
            {/* <Container fluid>
                <Boardhead />
                <Outlet />
            </Container>
            <Footer /> */}
            <div>
                <AppSidebar />
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    {/* <AppHeader /> */}
                    <div className="body flex-grow-1 px-3">
                        {/* <AppContent /> */}
                        <Outlet />
                    </div>

                    {/* <AppFooter /> */}
                </div>
            </div>
        </Provider>
    )
}
