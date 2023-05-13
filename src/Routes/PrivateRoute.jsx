import { React, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location =  useLocation()
    console.log(location);

    if (loading) {
        return <div className="animate-spin radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}></div>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;