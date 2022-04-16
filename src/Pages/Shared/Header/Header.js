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
                        <Nav.Link className='text-white' as={HashLink} to="/home#services">Courses</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/aboutme">About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}

                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;