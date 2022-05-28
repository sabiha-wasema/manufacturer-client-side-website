import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import useAdmin from '../Hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;



/* import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const RequireAdmin = () => {
    const location = useLocation();
    const [admin] = useAdmin();

    if (!admin) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

export default RequireAdmin; */