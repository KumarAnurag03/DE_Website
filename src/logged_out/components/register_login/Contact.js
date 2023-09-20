import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { Fragment } from "react";

export const Contact = () => {
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
          Dispatch and Recruiting
        </Typography>
        <Typography variant='h4'
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:16,
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
        <Typography variant='h4'
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:16,
          marginLeft:128
          }}>
          Fax 
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
        display:"flex"
      }}
      >
        <div
        style={{
          backgroundImage:'url(https://st2.depositphotos.com/1001877/5468/i/450/depositphotos_54681837-stock-photo-mobile-gps-navigation-concept-smartphone.jpg)',
          backgroundRepeat:"no-repeat",
          height:"300px",
          width:"31%"
        }}
        >
          <Typography>Image 1</Typography>
        </div>
        <div
        style={{
          backgroundImage:'url(https://st2.depositphotos.com/1001877/5468/i/450/depositphotos_54681837-stock-photo-mobile-gps-navigation-concept-smartphone.jpg)',
          backgroundRepeat:"no-repeat",
          height:"300px",
          width:"31%"
        }}
        >
          <Typography>Image 2</Typography>
        </div>
        <div
        style={{
          backgroundImage:'url(https://st2.depositphotos.com/1001877/5468/i/450/depositphotos_54681837-stock-photo-mobile-gps-navigation-concept-smartphone.jpg)',
          backgroundRepeat:"no-repeat",
          height:"300px",
          width:"31%"
        }}
        >
          <Typography>Image 3</Typography>
        </div>
      </Box>
    </div>
  )
}
