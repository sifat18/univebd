import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const EmployRoute = ({ children, ...rest }) => {
    // getting user info
    const { user, employer, admin, isLoading } = useAuth();
    const location = useLocation();
    console.log(user.email, admin)
    // wait until all info loads
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    // checking if admin
    if (admin || employer) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;

};

export default EmployRoute;