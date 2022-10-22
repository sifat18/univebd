import React, { Suspense } from 'react'
import 'core-js'
import './style.scss'
import { Outlet } from 'react-router-dom'
import AppSidebar from './AppSidebar/AppSidebar'
import { Provider } from 'react-redux'
import store from '../../store'
import Footer from '../Footer/Footer'
const AppHeader = React.lazy(() => import("./Apphead/AppHeader"));

export default function Board() {
    return (
        <Provider store={store}>
          
            <div>
            <Suspense>
                <AppSidebar />
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <AppHeader />
                    <div className="body flex-grow-1 px-3">
                        <Outlet />
                    </div>
                    

                    <Footer />
                </div>
                </Suspense>
            </div>
        </Provider>
    )
}
