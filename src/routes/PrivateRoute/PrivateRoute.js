import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';

const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { isLoading, email } = useSelector(state => state.auth);

    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading && !email) {
        return <Navigate to='/' state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;