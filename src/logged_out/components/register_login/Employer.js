import React, { useEffect } from 'react'
import { Fragment } from 'react'
import './Employer.css'
import Weld from "../../../images/weld.jpg";
import { Box, Typography } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

export const Employer = () => {

  useEffect(()=>{
    document.title="Employers"
  })

  return (
    <div
    style={{
      marginTop:"90px"
    }}
    >
        {/* <div className='wrapper'
        style={{
          marginTop:"10vh",
          height:"80vh",
          width:"100%",
          position:"relative",
          backgroundImage:`url(${Weld})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
        }}
        >
          <div className='contain'>

          </div>
        </div> */}
        <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          marginTop:"5vh",
        }}
        >
          <Typography style={{ marginBottom:"2vh",
          textAlign:"center"
        }} fontFamily={"serif"} variant='h4'>Who we are</Typography>
        <div
        style={{
          backgroundColor:"rgba(72,41,178,1)",
          height:"0.7vh"
        }}
        ></div>
          <Typography variant='h5' fontFamily={"sans-serif"}
          style={{
            paddingTop:"1vh",
            textAlign:"center",
            paddingLeft:"25vw",
            paddingRight:"25vw",
            letterSpacing: 1,
            lineHeight: 1.5
          }}
          >Our staffing solutions are adaptable to your business needs, offering temporary, temp-to-perm, and
          permanent options.</Typography>
          <Typography variant='h5' fontFamily={"sans-serif"}
          style={{
            textAlign:"center",
            paddingLeft:"25vw",
            paddingRight:"25vw",
            paddingTop:"2vh",
            paddingBottom:"2vh",
            letterSpacing: 1,
            lineHeight: 1.5
          }}
          > Our commitment to quality sets us apart:</Typography>
          <Typography variant='h5' fontFamily={"sans-serif"}
          style={{
            textAlign:"left",
            paddingLeft:"25vw",
            paddingRight:"25vw",
            letterSpacing: 1,
            lineHeight: 1.2
          }}
          ><b><LabelImportantOutlinedIcon/> Quality Candidates:</b> We carefully review and assess our job applicants to match their skills,
          qualifications, and work ethic with your specific job requirements. Quality is our priority.
          </Typography>
          <Typography variant='h5' fontFamily={"sans-serif"}
          style={{
            textAlign:"left",
            paddingLeft:"25vw",
            paddingRight:"25vw",
            letterSpacing: 1,
            lineHeight: 1.2
          }}
          ><LabelImportantOutlinedIcon/><b> Efficiency and Speed:</b> We know that time is money. Our fast hiring process ensures you get the
          workforce you need on time, so you can keep your operations running smoothly.</Typography>
          <Typography variant='h5' fontFamily={"sans-serif"}
          style={{
            textAlign:"left",
            paddingLeft:"25vw",
            paddingRight:"25vw",
            letterSpacing: 1,
            lineHeight: 1.3
          }}
          ><b><LabelImportantOutlinedIcon/> Diverse Talent Pool:</b> Whether  you need AZ, DZ or G drivers, warehouse   staff, or skilled industrial
          workers, we have a diverse pool of talent ready to meet your staffing needs.</Typography>
        </Box>
        <Box>
          
        </Box>
    </div>
  )
}
