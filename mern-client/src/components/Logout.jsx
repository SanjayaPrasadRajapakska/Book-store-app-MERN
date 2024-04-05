import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLayout = () => {
        logOut().then(() => {
                alert("Sign-out successful ! ");
                navigate(from, {replace: true});
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button type='button' className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLayout}>Logout</button>
        </div>
    )
}

export default Logout