import { Button } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
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
            <h2 className='text-primary text-center mt-2 mb-2'>Please Register</h2>
            {/* <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form> */}
            {/* {errorElement} */}
            <form onSubmit={handleRegister}>

                <input className='w-50 mx-auto form-control' type="text" name="name" id="" placeholder='Name' />
                <br />

                <input className='w-50 mx-auto form-control' type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input className='w-50 mx-auto form-control' type="password" name="password" id="" placeholder='Password' required />
                <br />

                {/* <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" /> */}
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>*/}
                <input
                    // disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;