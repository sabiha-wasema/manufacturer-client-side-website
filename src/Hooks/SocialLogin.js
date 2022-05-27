import React, { useEffect } from 'react';
// import './SocialLogin.css'
import GoogleLogo from '../assets/images/social/google.png'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';


const SocialLogin = () => {

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [signInWithGoogle, googleUser, loading1, googleError] = useSignInWithGoogle(auth)


    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    })
    useEffect(() => {
        if (googleError) {
            toast.error(googleError?.message)
        }
    }, [googleError])

    return (

        <div >
            <div className='w-[35px] flex justify-items-center mr-5'>
                <img onClick={() => signInWithGoogle()} src={GoogleLogo} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;