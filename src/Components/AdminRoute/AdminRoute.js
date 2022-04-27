import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {  admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    if (admin) {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} />;

};

export default AdminRoute;