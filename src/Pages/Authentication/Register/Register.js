import { Button } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-secondary text-center mt-3 mb-3'>Please Register</h2>

            <form onSubmit={handleRegister}>

                <input className='w-50 mx-auto form-control' type="text" name="name" id="" placeholder='Name' />
                <br />

                <input className='w-50 mx-auto form-control' type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input className='w-50 mx-auto form-control' type="password" name="password" id="" placeholder='Password' required />
                <br />


                <div className='text-center'>
                    <input

                        className='w-50 mx-auto btn btn-secondary mt-2'
                        type="submit"
                        value="Register" />
                </div>
            </form>
            <div className='text-center mt-2'>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;