import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    // for reseting password

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-secondary text-center mt-3 mb-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="secondary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                {errorElement}
            </div>
            <div className='text-center mt-2'>
                <p>New to Code With Saba? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;