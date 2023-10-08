import { Box, Typography,TextField,Button, Link } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import './JobPosting.css'
import { db } from '../../../firebase'
import { Timestamp } from 'firebase/firestore';
import { useStateValue } from '../../../MyContexts/StateProvider'
import { JobCard } from './JobCard'
import { useEffect } from 'react'
import LoginDialog from './LoginDialog'
import { useHistory } from 'react-router-dom'


export const Jobposting = ({openLoginDialog}) => {

    const history = useHistory();

    const [{user},dispatch]=useStateValue();
    const jobsRef=db.collection('Listings');
    const[jobList,setJobList]=useState([]);

    useEffect(()=>{
        if(user){
            jobsRef
            .orderBy('createdAt').get()
            .then(querySnapshot=>{
            const data=querySnapshot.docs.map(doc=>({
                ...doc.data(),
                id:doc.id
            }));
            setJobList(data);
        })
    }
    else{
        openLoginDialog();
    }
    },[user,jobsRef])
    
    const handleSubmit=()=>{
        db.collection('Listings').add({
            jobtype,rate,location,jd,
            createdAt:Timestamp.now().toDate().toDateString(),
            list:[]
        })
    }
    
    const [jobtype, setJobtype] = useState(null);
    const [rate, setRate] = useState(null);
    const [location, setLocation] = useState(null);
    const [jd, setJD] = useState(null);
    return (
    <>
        {user?
                <div>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        // alignItems:"center",
                        padding:"100px 100px"
                    }}
                    >
                        <div
                        style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                            <Typography className="form_label" >
                                Job Type:
                            </Typography>
                            
                            <TextField
                                className="form_input"
                                type="text"
                                value={jobtype}
                                onChange={(e) => setJobtype(e.target.value)}
                                id="jobtype"
                                placeholder="Job type"
                                variant="outlined"
                                margin="normal"
                            />
                        </div>
                        <div
                        style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                            <Typography className="form_label" >
                                Pay Rate in $/Hr:
                            </Typography>
                            
                            <TextField
                                className="form_input"
                                type="text"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                id="rate"
                                placeholder="rate"
                                variant="outlined"
                                margin="normal"
                            />
                            
                        </div>
                        <div
                        style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                            <Typography className="form_label" >
                                Location:
                            </Typography>
                            
                            <TextField
                                className="form_input"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                id="location"
                                placeholder="enter city and province"
                                variant="outlined"
                                margin="normal"
                            />
                        </div>
                        <div
                        style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                            <Typography className="form_label" >
                                Job Description:
                            </Typography>
                            
                            <TextField
                                className="form_input"
                                type="text"
                                value={jd}
                                onChange={(e) => setJD(e.target.value)}
                                id="jd"
                                placeholder="add description"
                                variant="outlined"
                                margin="normal"
                                multiline
                                sx={{
                                    height:"40px",
                                    width:"60%"
                                }}
                            />
                        </div>
        
                    </Box>
                    <Button onClick={handleSubmit}>
                        Post
                    </Button>
                    <Button onClick={()=>{window.location.href='https://docs.google.com/spreadsheets/d/1--uXfoypXhJOMa92KVL-yRN8q2jLgqjITWWbav3SbwA/edit#gid=0'}}>
                        View user details
                    </Button>
                    <Typography color={"rgba(71,42,178)"} variant='h3' fontFamily={"serif"}
                    sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                    >
                        Job Listings
                    </Typography>
                    {jobList.map(job=>(
                        <JobCard
                            jd={job.jd}
                            jobtype={job.jobtype}
                            location={job.location}
                            rate={job.rate}
                            time={job.createdAt}
                            status="admin"
                            id={job.id}
                        />
                    ))}
        
                </div>

                :

                <div style={{
                    marginTop:"15vh"
                }}>
                    <Button onClick={()=>{openLoginDialog()}}>Login</Button>
                    <Button onClick={()=>{history.push('/')}}>Go Back To Home Page</Button>
                </div>
        } 
    </>
  )
}
