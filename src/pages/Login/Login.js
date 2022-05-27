import React, { useEffect, useState } from 'react';
import './Login.css';
import LoginImage from '../../assets/images/social/login.jpg'
import MailLogo from '../../assets/images/social/mail.png'
import LockLogo from '../../assets/images/social/lock.png'
import SocialLogin from '../../Hooks/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';



const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const navigateRegister = () => {
        navigate('/signup')
    }

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const [customError, setCustomError] = useState({
        emailError: "",
        passwordError: "",
        othersError: ""
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        firebaseError,
    ] = useSignInWithEmailAndPassword(auth);

    const [passwordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleFormSubmit = async event => {
        const email = userInfo?.email
        event.preventDefault()
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        const { data } = await axios.post("https://arcane-island-70615.herokuapp.com/login", { email })
        localStorage.setItem('token', data.token)
        navigate(from, { replace: true });
    }

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

    useEffect(() => {
        if (firebaseError) {
            toast.error(`${firebaseError.message}`)
        }
    }, [firebaseError])


    return (
        <div className='login-container bg-base-200 mt-10'>
            <div className='login-image-container'>
                <img className='w-full mt-2' src={LoginImage} alt="" />
            </div>
            <form onSubmit={handleFormSubmit} className='form-container'>
                <div>
                    <h2 className='login-text text-zinc-700'>Login</h2>
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

                    <div className='flex justify-between forget-container'>
                        <p className='mx-4 register'>Need an Account? <span onClick={navigateRegister} className="cursor-pointer hover:text-blue-700 text-blue-500">Please Register</span></p>
                        <p onClick={async () => {
                            if (userInfo.email === "") {
                                toast.error("Please provide your email")
                            }
                            else {
                                await passwordResetEmail(userInfo.email)
                                toast.success("Password reset email was sent")
                            }
                        }} className='forgot-password cursor-pointer'>Forgot Password?</p>
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

export default Login;