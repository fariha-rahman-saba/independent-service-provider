import React, { useEffect, useState } from 'react';
import banner from '../../images/banner/banner_1.jpg'
import SingleCourse from '../SingleCourse/SingleCourse';
import SingleReview from '../SingleReview/SignleReview';
import './Home.css'
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    console.log(courses);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    console.log(reviews);
    return (

        <div >
            <img className='img-fluid' src={banner} alt="" />
            <div>
                <h1 id='courses'>Courses</h1>
                <div className='courses'>
                    {
                        courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                    }
                </div>
                <h1 id='reviews'>
                    Reviews
                </h1>
                {/* <div>
                    {
                        reviews.map(review => <SingleReview key={review.id} course={review}></SingleReview>)
                    }
                </div> */}
            </div>
        </div>

    );
};

export default Home;