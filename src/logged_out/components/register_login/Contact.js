import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import  Weld  from "../../../images/weld.jpg";
import Fork from "../../../images/fork.jpg";
import Fac from "../../../images/fac.jpg";
import './Contact.css';
import { Fragment } from "react";

export const Contact = () => {

  useEffect(()=>{
    document.title="Contacts"
    window.scrollTo(0,0);
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
        marginTop:"4vh",
        marginBottom:"2vh"
        // padding:"100px 50px"
      }}
      >
        {/* <Typography variant='h2' fontFamily={"serif"} color={"rgba(0,0,0,1)"}>
          Contact us to get Listed
        </Typography> */}
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
        backgroundColor:"rgba(0,0,0,0.7)",
        width:"100%",
        height:"0.7vh"
      }}></div>
      {/* <div
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
      </div> */}
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
        <Grid container className='box1'
        style={{
          backgroundImage: `url(${Fac})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          // height:"100vh",
          // width:"100%",
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"start"
        }}
        >
          <Grid item xs={12} md={12} className='item1'
          style={{
            borderRadius:"10px",
          backgroundColor:"rgba(0,0,0,0.6)",
          // width:"100%",
          paddingTop:"1vh",
          paddingBottom:"2vh",
          paddingLeft:"4vw",
          paddingRight:"4vw",
          // marginLeft:"-10vw",
          // marginLeft:"-10vw",
          // height:"100%",
          // marginTop:"25vh",
          // marginBottom:"25vh"
        }}
        >
        <Typography
        style={{
          paddingTop:(window.innerWidth<=938)?"15vh":"20vh",
          // paddingBottom:"10vh",
          textAlign:"center",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h4' fontFamily={"serif "}>Ready to optimize your staffing process?</Typography>
        <Typography
        style={{
          paddingTop:"2vh",
          textAlign:"center",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h5' fontFamily={"sans-serif "}> Contact us today to discuss your Healthcare, Trucking and Industrial
          staffing needs. Let's drive success together!</Typography>
        <Typography
        style={{
          paddingTop:"8vh",
          textAlign:"center",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h4' fontFamily={"serif "}>Reach Out</Typography>
         <Typography
        style={{
          // paddingTop:"2vh",
          textAlign:"center",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h5' fontFamily={"sans-serif "}>Phone: 705-300-1123</Typography>
         <Typography
        style={{
          // paddingTop:"2vh",
          textAlign:"center",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h5' fontFamily={"sans-serif "}>Email: hr@Fusionstaffing.ca</Typography>
        <Typography
        style={{
          paddingTop:"8vh",
          textAlign:"center",
          paddingBottom:"20vh",
          paddingLeft:"5vw",
          paddingRight:"5vw",
          letterSpacing: 1,
          lineHeight: 1.5
        }}
         color={"rgba(255,255,255)"} variant='h5' fontFamily={"sans-serif "}>We're here to help you navigate your staffing needs and drive toward greater success.</Typography>
       </Grid>
       {/* <Grid item xs={12} md={6}
          style={{
          backgroundColor:"rgba(0,0,0,0.8)",
          // height:"42.3vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          paddingTop:"1vh",
          paddingBottom:"2vh",
          paddingLeft:"4vw",
          paddingRight:"4vw",
          marginTop:"25vh",
          marginBottom:"25vh"
        }}
        >
        <Typography variant='h3' fontFamily={"serif "} style={{paddingBottom:"20px"}} color={"rgba(255,255,255,1)"} >Call at </Typography>
        <Typography variant='h3' fontFamily={"serif "} style={{paddingBottom:"20px"}} color={"rgba(255,255,255,1)"} >647-327-4487</Typography>
        <Typography variant='h3' fontFamily={"serif "} style={{paddingBottom:"20px"}} color={"rgba(255,255,255,1)"} >Email At</Typography>
        <Typography variant='h3' fontFamily={"serif"} style={{paddingBottom:"20px"}} color={"rgba(255,255,255,1)"}>info@Dreamemployment.ca</Typography>
       </Grid> */}

      </Grid>
      </Box>
    </div>
  )
}
