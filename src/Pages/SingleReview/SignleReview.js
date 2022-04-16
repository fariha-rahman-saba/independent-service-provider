import React from 'react';

const SingleReview = ({ review }) => {
    console.log(review);
    const { user_name, review_detail, rating, image } = review;
    return (
        <div className='single-review'>
            <img src={image} alt="" width="200px" height="130px" />
            <h2>{user_name}</h2>
            <p>{review_detail}</p>
            <h5>Rating: {rating}</h5>

        </div>
    );
};

export default SingleReview;