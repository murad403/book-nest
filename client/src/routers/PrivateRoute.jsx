import React from 'react';
import { useAuth } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return (
        <div className='flex items-center justify-center'>
            <LineWave height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>)
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;