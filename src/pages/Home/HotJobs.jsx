import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import JobsCard from '../../Shared/JobsCard';

const HotJobs = () => {
    const {jobs, setJobs} = useContext(AuthContext);
      const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setJobs(data);
            setLoading(false)
        })
        .catch(err=>{
            console.log('your fetch err ::', err);
            setLoading(false)
        })
    },[setJobs]);

    if (loading) {
    return <p className="text-center">Loading jobs...</p>;
  }

    return (
        <div>
            <div>
                {
                    jobs.map((job)=>(<JobsCard key={job._id} job={job}></JobsCard>))
                }
            </div>
        </div>
    );
};

export default HotJobs;