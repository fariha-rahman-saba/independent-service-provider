import React from 'react';
import './SingleReview.css'

const SingleReview = ({ review }) => {
    console.log(review);
    const { user_name, review_detail, rating, image } = review;
    return (
        <div className='review'>
            <img src={image} alt="" width="200px" height="130px" />
            <h4>{user_name}</h4>
            <p>{review_detail}</p>
            <h5>Rating: {rating}</h5>

        </div>
    );
};

export default SingleReview;