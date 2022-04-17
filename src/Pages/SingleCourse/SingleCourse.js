import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({ course }) => {
    console.log(course);
    const { name, short_desc, price, image } = course;
    return (
        <div className='course'>
            <img src={image} alt="" width="200px" height="130px" />
            <h4>{name}</h4>
            <p>{short_desc}</p>
            <h5>{price}</h5>
            <button className='btn btn-primary w-50 mx-auto d-block mb-2'>Check out →</button>
        </div>
    );
};

export default SingleCourse;