import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const InstructorRoute = ({ children, ...rest }) => {
    const { user, instructor, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    if (user.email && instructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;

};

export default InstructorRoute;