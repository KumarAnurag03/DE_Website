import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { db } from '../../firebase';

export const Applications = () => {

    const {jobid}=useParams();

    const [applicants,setApplicants]=useState([]);

    useEffect(()=>{
        db.collection('Listings').doc(jobid).get()
        .then(doc=>{
            const temp=doc.data().list;
            setApplicants(temp);
        })
    },[db]);

  return (
    <div>
        {applicants.map((applicant)=>{
            <>
                Email: {applicant.email} <br />
                First Name: {applicant.firstName} <br />

                <br />
                <br />
                <br />
            </>   
        })}
    </div>
  )
}
