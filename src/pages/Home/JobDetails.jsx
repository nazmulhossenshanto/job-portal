import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    const {_id,title, company} = job;

    console.log(job);
    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-bold'> Details of {title}</h1>
            <p>Company name : {company}</p>
        <NavLink to={`/jobApply/${_id}`}><button className='btn btn-primary'>Job Apply</button></NavLink>
        </div>
    );
};

export default JobDetails;