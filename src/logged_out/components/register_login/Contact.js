import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import  Weld  from "../../../images/weld.jpg";
import Fork from "../../../images/fork.jpg";
import Fac from "../../../images/fac.jpg";
import './Contact.css';
import { Fragment } from "react";

export const Contact = () => {

  useEffect(()=>{
    document.title="Contacts"
  },[])

  return (
    <div
    style={{
      // marginTop:100,
      // display:'flex',
      // flexDirection:"column",
      // justifyContent:"center",
      // alignItems:"center",
      // padding:"100px 100px"
      // justifyContent:"center",
      // alignItems:"center"
    }}
    >
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"100px 100px"
      }}
      >
        <Typography variant='h3'>
          Contact us to get Listed
        </Typography>
        <Typography variant='h4'
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:32,
          marginLeft:64
          }}>
          Brampton
        </Typography>
        <Typography variant='h4'
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:2,
          marginLeft:128
          }}>
          Barrie
        </Typography>
      </Box>
      <Box
      sx={{
        // marginTop:"60px"
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
      >
        <Button variant='outlined'
        style={{
          borderColor:"blue",
          width:"25%"
        }}
        >
          DISPATCH
        </Button>
        <Button variant='outlined'
        style={{
          borderColor:"blue",
          width:"25%",
          
        }}
        >
          RECRUIT
        </Button>
        <Button variant='outlined'
        style={{
          borderColor:"blue",
          width:"25%"
        }}
        >
          SALES
        </Button>
      </Box>
      <Box
      sx={{
        marginTop:"40px",
        // width:"100%",
        display:"flex",
        justifyContent: "center"
      }}
      >
        <div className='box1'
        style={{
          backgroundImage: `url(${Fac})` ,
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          height:"400px",
          width:"32.5%"
        }}
        >
          <Typography>Image 1</Typography>
        </div>
        <div className='box1'
        style={{
          backgroundImage: `url(${Fork})`,
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          height:"400px",
          width:"32.5%",
          marginRight:"8px",
          marginLeft:"8px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          <Typography className='txt1' variant='h2'>Image 2</Typography>
        </div>
        <div className='box1'
        style={{
          backgroundImage: `url(${Fac})`,
          backgroundColor:"rgba()",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          height:"400px",
          width:"32.5%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          <div className='txt1'>
            <Typography variant='h2'>Image 3</Typography>
          </div>
        </div>
      </Box>
    </div>
  )
}
