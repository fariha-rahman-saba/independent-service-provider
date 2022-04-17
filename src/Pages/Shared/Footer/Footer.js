import React from 'react';

const Footer = () => {
    return (
        <div className='text-center'>
            <p>Copyright © {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Footer;