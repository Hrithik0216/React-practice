import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { TOKEN } from './Token';

const ProtectedRouter = ({ children }) => {
    const location = useLocation();

    let token = localStorage.getItem(TOKEN)
    if (!token) {
        return <Navigate to="/" state={{ from: location }} />
        // or simply Link to. The above uses redirection concept
    }
    return children
}

export default ProtectedRouter;
