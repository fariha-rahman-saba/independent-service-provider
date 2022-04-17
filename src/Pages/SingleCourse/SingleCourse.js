import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({ course }) => {
    console.log(course);
    const { name, short_desc, price, image } = course;
    return (
        <div className='single-course'>
            <img src={image} alt="" width="200px" height="130px" />
            <h2>{name}</h2>
            <p>{short_desc}</p>
            <h5>{price}</h5>

        </div>
    );
};

export default SingleCourse;