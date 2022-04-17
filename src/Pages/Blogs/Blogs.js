import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans'>

            <h3>Q1: Difference between authorization and authentication</h3>
            <p>Ans: Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users. Authentication is the first step of a good identity and access management process. Authorization always takes place after authentication.</p>
            <h3>Q2: Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Ans: Firebase Authentication makes building secure sign-ins for any platform easy. This end-to-end solution supports email and password, phone auth, and multi-platform login. The other options we have are Parse: Open Source Backend Platform, Back4app: Parse Hosting Platform, Kinvey: Mobile Backend as a Service (mBaaS) for the Enterprise, Kuzzle: Backend for web, hybrid, or native mobile apps and IoT projects etc.</p>
            <h3>Q3: What other services does firebase provide other than authentication?</h3>
            <p>Ans: Firebase adds an end-to-end identity solution to your app for easy user authentication, sign-in, and onboarding in just a few lines of code. The other services firebases provide other than authentication are Realtime Database : Store and sync
                data in real time, Firebase Remote Config: Control and optimize your app on the fly, Firebase Machine Learning: Machine learning for mobile developers, Cloud Storage for Firebase, Firebase Hosting: Fast and secure web hosting etc.
            </p>
        </div>
    );
};

export default Blogs;