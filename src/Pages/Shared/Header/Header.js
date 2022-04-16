import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">Code With Saba</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#courses">Courses</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/aboutme">About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link className='text-white' as={Link} to="login">
                                    Login
                                </Nav.Link>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;