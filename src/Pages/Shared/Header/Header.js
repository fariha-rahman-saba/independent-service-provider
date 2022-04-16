import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Code With Saba</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className='text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#services">Courses</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='text-white' as={HashLink} to="/aboutme">About Me</Nav.Link>

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