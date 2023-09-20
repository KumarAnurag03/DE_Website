import React from 'react'
import { JobCard } from "./JobCard";
import { useStateValue } from '../../../MyContexts/StateProvider.js'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { db  } from '../../../firebase';
import { useEffect } from 'react';
import './JobListing.css'
import { Button } from '@mui/material';


export const JobListing = ({openLoginDialog}) => {

  const history=useHistory();

  const [{user},dispatch]=useStateValue();

  const jobsRef=db.collection('Listings');

  const[jobList,setJobList]=useState([]);

  useEffect(()=>{
    if(user){
      jobsRef
      .orderBy('createdAt')
      .onSnapshot(querySnapshot=>{
        const data=querySnapshot.docs.map(doc=>({
          ...doc.data()
        }));
        setJobList(data);
      })
    }
  },[user,jobsRef])

  return (
    <div>

      {user?
        jobList.map(job=>(
          <JobCard
            jd={job.jd}
            jobtype={job.jobtype}
            location={job.location}
            rate={job.rate}
            time={job.createdAt}
            status="user"
            id={job.id}
          />
        ))
        :
        <div class="login_text"><Button onClick={openLoginDialog}>Login</Button> to continue</div>
      }
      
    </div>
  )
}
