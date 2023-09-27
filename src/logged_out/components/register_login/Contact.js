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
        paddingTop:"100px"
        // padding:"100px 50px"
      }}
      >
        <Typography variant='h2' fontFamily={"serif"} color={"rgba(42,20,178,1)"}>
          Contact us to get Listed
        </Typography>
        {/* <Typography variant='h4'
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:32,
          marginLeft:64
          }}>
          Brampton
        </Typography> */}
        {/* <Typography variant='h4' fontFamily={"serif"}
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:64,
          marginLeft:32
          }}>
          Barrie - 647-327-4487 
        </Typography>
        <Typography variant='h4' fontFamily={"serif"} display={"inline"}
        style={{
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"center",
          marginTop:16,
          marginLeft:32
          }}>
          Email at - info@Dreamemployment.ca 
        </Typography> */}
        
      </Box>
      <div style={{
        backgroundColor:"rgba(0,0,0,1)",
        width:"100%",
        height:"0.7vh"
      }}></div>
      <div
      style={{
        // backgroundColor:"rgba(72,41,178,0.5)",
        paddingTop:"20px",
        paddingLeft:"80px",
        paddingRight:"80px",
        paddingBottom:"20px"
      }}
      >
        <Typography
        style={{
          letterSpacing: 2,
          lineHeight: 1.2
        }}
         variant='h3' fontFamily={"serif"} color={"rgba(42,20,178,1)"}>We  believe in building long-lasting partnerships with both our clients and 
          candidates. We take the time to understand your unique requirements,
          ensuring a perfect match that benefits everyone involved.</Typography>
      </div>
      {/* <Box
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
      </Box> */}
      <Box
      sx={{
        // marginTop:"20px",
        // width:"100%",
        display:"flex",
        justifyContent: "center"
      }}
      >
        {/* <div className='box1'
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
        </div> */}
        <div className='box1'
        style={{
          backgroundImage: `url(${Fac})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          height:"100vh",
          width:"100%",
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"start"
        }}
        >
          <div
          style={{
          backgroundColor:"rgba(72,41,178)",
          paddingTop:"2vh",
          paddingBottom:"2vh",
          paddingLeft:"4vw",
          paddingRight:"4vw",
          marginTop:"25vh"
        }}
        >
        <Typography variant='h3' fontFamily={"serif "}>Ready to streamline your staffing process? Contact us today to discuss your trucking and industrial
          staffing needs. Let's drive success together!</Typography>
       </div>
       <div
          style={{
          backgroundColor:"rgba(0,0,0,0.8)",
          height:"42.3vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          paddingTop:"2vh",
          paddingBottom:"2vh",
          paddingLeft:"4vw",
          paddingRight:"4vw",
          marginTop:"25vh"
        }}
        >
        <Typography variant='h3' fontFamily={"serif "} style={{paddingBottom:"20px"}} color={"rgba(72,41,178,1)"} >Call at - 647-327-4487</Typography>
        <Typography variant='h3' fontFamily={"serif"} color={"rgba(71,42,178,1)"}>info@Dreamemployment.ca</Typography>
       </div>

      </div>
      </Box>
    </div>
  )
}
