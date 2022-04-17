import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();

    if (isLoading) {

        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    if (user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoute;