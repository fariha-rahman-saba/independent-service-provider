import React, { useEffect, useState } from 'react';
import banner from '../../images/banner/banner_1.jpg'
import SingleCourse from '../SingleCourse/SingleCourse';
const Home = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    console.log(courses);
    return (

        <div >
            <img className='img-fluid' src={banner} alt="" />
            <div>
                <h1>Courses</h1>
                <div className='courses'>
                    {
                        courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;