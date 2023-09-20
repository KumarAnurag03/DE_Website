import { Password } from '@mui/icons-material'
import { Box, Button, Card, Paper, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { db } from '../../../firebase'
import { useStateValue } from '../../../MyContexts/StateProvider'
import { useState,useEffect } from 'react'

export const JobCard = ({jd,jobtype,location,rate,time,status,id}) => {

    const [{user,company},dispatch]=useStateValue();

    const [isPresent,setIsPresent]=useState(false);

    useEffect(()=>{
        for(var i=0;i<company.size;i++){
            if(id===company[i].id){
                setIsPresent(true);
                break;
            }
        }
        console.log(company);
    },[company])

    const handleApply=()=>{
        if(!isPresent){
            db.collection('users').doc(user.uid).get()
            .then(doc=>{
                let newCompanyList=doc.data().company;
                newCompanyList.push({id});
                dispatch({
                    type:"ADD_COMPANY",
                    company:newCompanyList
                })
                db.collection('users').doc(user.uid).set({
                    ...doc.data(),
                    company:newCompanyList
                })
            })
        }
        else{
            var idx=0;
            while(idx<company.size && company[idx].id!==id) idx++;
            company.splice(idx,1);
            dispatch({
                type:"ADD_COMPANY",
                company
            })
            db.collection('users').doc(user.uid).get()
            .then(doc=>{
                db.collection('users').doc(user.uid).set({
                    ...doc.data(),
                    company
                })
            })
            setIsPresent(false);
        }
    }

    const handleDelete=()=>{
        db.collection('Listings').doc(id).delete();
    }

  return (
    <div
    style={{
        marginTop:100
    }}
    >
        <Typography variant='h3'
        sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            Job Listings
        </Typography>
        <Box
        sx={{
            display: 'flex',
            justifyContent:"space-around",
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 2,
                width: 560,
                // height:500,
            },
        }}
        >
            <Paper elevation={3}
            sx={{
                display:'block',
            }}
            >
                <Typography variant='h5'
                sx={{
                    m:1
                }}
                >
                   <b>{jobtype}</b>
                </Typography>
                <Typography variant='h7'
                sx={{
                    m: 1,
                    display:'block'
                }}>
                    <b>Pay Rates:</b> {rate}
                </Typography>
                <Typography variant='h7'
                sx={{
                    marginLeft:2,
                    marginBottom:2,
                    display:'block'
                }}>
                    {location}
                </Typography>
                <Typography variant='h8'
                sx={{
                    display:'block',
                    m:1
                }}>
                    {jd}
                </Typography>
                <Card variant='outlined'
                sx={{
                    marginTop:4,
                    width:560,
                    height:60,
                    display:"flex",
                    justifyContent:"space-around",
                    alignItems:'center'
                }}
                >
                    <Typography variant='h8'>
                        Posted on {time}
                    </Typography>
                    {status=="admin"?
                        <Button onClick={handleDelete}>
                            Delete
                        </Button>
                        :
                        <Button onClick={handleApply}>
                            {isPresent?<>Applied</>:<>Apply</>}
                        </Button>
                    }
                </Card>
            </Paper>
        </Box>
    </div>
  )
}
