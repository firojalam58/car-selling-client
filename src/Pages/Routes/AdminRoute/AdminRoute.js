import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import UserAdmin from '../../../Hooks/UserAdmin';

const AdminRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true)
    const [isAdmin] = UserAdmin(user?.email)
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;