import React, { useEffect, useState } from 'react';
import LoginImage from '../../assets/images/social/login.jpg';
import MailLogo from '../../assets/images/social/mail.png'
import LockLogo from '../../assets/images/social/lock.png'
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import SocialLogin from '../../Hooks/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {

    const navigateToLogin = () => {
        navigate('/login')
    }
    const location = useLocation()
    const [createUserWithEmailAndPassword, user, loading, firebaseError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: ""
    })

    const [customError, setCustomError] = useState({
        emailError: "",
        passwordError: "",
        othersError: ""
    })

    const handleInputEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setCustomError({ ...customError, emailError: "" })
        }
        else {
            setCustomError({ ...customError, emailError: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handleInputPassword = event => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value)
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setCustomError({ ...customError, passwordError: "" })
        }
        else {
            setCustomError({ ...customError, passwordError: "Minimum 6 character length" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleInputConfirmPassword = event => {

        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: event.target.value })
            setCustomError({ ...customError, passwordError: "" })
        }
        else {
            setCustomError({ ...customError, passwordError: "Password don't match" })
            setUserInfo({ ...userInfo, confirmPass: "" })
        }
    }

    useEffect(() => {
        if (firebaseError) {
            toast.error(`${firebaseError.message}`)
        }
    }, [firebaseError])

    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    })

    const handleFormSubmit = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.confirmPass);
    }


    return (
        <div className='login-container'>
            <div className='login-image-container'>
                <img className='login-illustration' src={LoginImage} alt="" />
            </div>
            <form onSubmit={handleFormSubmit} className='form-container'>
                <div>
                    <h2 className='login-text text-zinc-700'>Register</h2>
                </div>
                <div className='inputs-container'>
                    <p className='email-password-text'>Email</p>
                    <div className='flex'>
                        <img src={MailLogo} alt="" />
                        <input onChange={handleInputEmail} className='input-style' type="email" name="" id="email" placeholder='Type your email' required />
                    </div>
                    <div className='bottom-line'></div>
                    {
                        customError?.emailError && <p className='text-red-500 mt-1 text-sm'>{customError.emailError}</p>
                    }

                    <p className='email-password-text'>Password</p>
                    <div className='flex'>
                        <img src={LockLogo} alt="" />
                        <input onChange={handleInputPassword} className='input-style' type="password" name="" id="password" placeholder='Type your password' required />
                    </div>
                    <div className='bottom-line'></div>
                    {
                        customError?.passwordError && <p className='text-red-500 mt-1 text-sm'>{customError.passwordError}</p>
                    }
                    <p className='email-password-text'>Confirm Password</p>
                    <div className='flex'>
                        <img src={LockLogo} alt="" />
                        <input onChange={handleInputConfirmPassword} className='input-style' type="password" name="" id="password" placeholder='Type your confirm password' required />
                    </div>
                    <div className='bottom-line'></div>


                    <div className='flex justify-between forget-container'>
                        <p className='mx-4 register my-4'>Already have an Account? <span onClick={navigateToLogin} className="cursor-pointer hover:text-blue-700 text-blue-500">Please Login</span></p>
                    </div>

                    <input className='login-button' type="submit" value="Login" />

                    <div className='or-container'>
                        <div className='line'></div>
                        <p className='text-center mx-5'>Or</p>
                        <div className='line'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default SignUp;