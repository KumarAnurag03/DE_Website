import React, { useEffect } from 'react'
import { Fragment } from 'react'
import './Employer.css'
import Weld from "../../../images/weld.jpg";
import Fork from "../../../images/fork.jpg";
import { Box, Grid, Typography,Button } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';

export const Employer = () => {

  useEffect(()=>{
    document.title="Employers"
  })

  const history = useHistory();

  const handleClick=()=>{
    history.push('/contact')
  }

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
        <Typography color={"rgba(41,72,178,1)"} style={{ marginBottom:"2vh",
            fontWeight:"bold",
            textAlign:"center"
          }} fontFamily={"serif"} variant='h4'>Who we are</Typography>
          <div
          style={{
            backgroundColor:"rgba(72,41,178,1)",
            height:"0.7vh"
          }}
          ></div>
        <Grid container>
          <Grid item xs={12} md={6} lg={6}
          sx={{
            // backgroundColor:"rgba(71,42,178,0.3)",
            paddingLeft:"1vw",
            paddingRight:"1vw",
            paddingBottom:"1vh"
          //   display:"flex",
          //   flexDirection:"column",
          //   justifyContent:"center",
          //   marginTop:"5vh",
          }}
          >
            
            <Typography variant='h5' color={"rgba(41,72,178,0.7)"} fontFamily={"sans-serif"}
            style={{
              paddingTop:"1vh",
              textAlign:"center",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.5
            }}
            >Our staffing solutions are adaptable to your business needs, offering temporary, temp-to-perm, and
            permanent options.</Typography>
            <Typography variant='h5' color={"rgba(41,72,178,0.7)"} fontFamily={"sans-serif"}
            style={{
              textAlign:"center",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              paddingTop:"2vh",
              paddingBottom:"2vh",
              letterSpacing: 1,
              lineHeight: 1.5
            }}
            > Our commitment to quality sets us apart:</Typography>
            <Typography variant='h5' color={"rgba(41,72,178,0.7)"} fontFamily={"sans-serif"}
            style={{
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.2
            }}
            ><b><LabelImportantOutlinedIcon/> Quality Candidates:</b> We carefully review and assess our job applicants to match their skills,
            qualifications, and work ethic with your specific job requirements. Quality is our priority.
            </Typography>
            <Typography variant='h5' color={"rgba(41,72,178,0.7)"} fontFamily={"sans-serif"}
            style={{
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.2
            }}
            ><LabelImportantOutlinedIcon/><b> Efficiency and Speed:</b> We know that time is money. Our fast hiring process ensures you get the
            workforce you need on time, so you can keep your operations running smoothly.</Typography>
            <Typography variant='h5' color={"rgba(41,72,178,0.7)"} fontFamily={"sans-serif"}
            style={{
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.3
            }}
            ><b><LabelImportantOutlinedIcon/> Diverse Talent Pool:</b> Whether  you need AZ, DZ or G drivers, warehouse   staff, or skilled industrial
            workers, we have a diverse pool of talent ready to meet your staffing needs.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}
          sx={{
            backgroundImage:`url(${Weld})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            width:"100%",
            // height:"30%"
          }}
          >
            
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} lg={6}
          sx={{
            backgroundImage:`url(${Fork})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            width:"100%",
            // height:"30%"
          }}
          >
            
          </Grid>
          <Grid item xs={12} md={6} lg={6}
          sx={{
            // backgroundColor:"rgba(71,42,178,0.3)",
            paddingLeft:"2vw",
            paddingRight:"2vw",
            paddingBottom:"1vh"
          //   display:"flex",
          //   flexDirection:"column",
          //   justifyContent:"center",
          //   marginTop:"5vh",
          }}
          >
            
            <Typography color={"rgba(41,72,178,0.7)"} variant='h5' fontFamily={"sans-serif"}
            style={{
              paddingTop:"7vh",
              textAlign:"center",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.5
            }}
            >Our staffing solutions are adaptable to your business needs, offering temporary, temp-to-perm, and
            permanent options.</Typography>
            {/* <Typography variant='h5' fontFamily={"sans-serif"}
            style={{
              textAlign:"center",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              paddingTop:"2vh",
              paddingBottom:"2vh",
              letterSpacing: 1,
              lineHeight: 1.5
            }}
            > Our commitment to quality sets us apart:</Typography> */}
            <Typography color={"rgba(41,72,178,0.7)"} variant='h5' fontFamily={"sans-serif"}
            style={{
              paddingTop:"3vh",
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.2
            }}
            ><b><LabelImportantOutlinedIcon/> Trucking Professionals:</b> From long-haul truckers to local delivery drivers, we've got your
            transportation staffing covered.
            </Typography>
            <Typography color={"rgba(41,72,178,0.7)"} variant='h5' fontFamily={"sans-serif"}
            style={{
              paddingTop:"3vh",
              paddingBottom:"7vh",
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.2
            }}
            ><LabelImportantOutlinedIcon/><b> Industrial Workforce:</b> We provide skilled labor for manufacturing, warehouse operations and
            forklift operators helping you meet production goals.</Typography>
            {/* <Typography variant='h5' fontFamily={"sans-serif"}
            style={{
              textAlign:"left",
              // paddingLeft:"25vw",
              // paddingRight:"25vw",
              letterSpacing: 1,
              lineHeight: 1.3
            }}
            ><b><LabelImportantOutlinedIcon/> Diverse Talent Pool:</b> Whether  you need AZ, DZ or G drivers, warehouse   staff, or skilled industrial
            workers, we have a diverse pool of talent ready to meet your staffing needs.</Typography> */}
          </Grid>
          
        </Grid>
        <Grid container
        sx={{
          // backgroundColor:"rgba(41,72,178,0.9)",
          width:"100%",
          // height:"20vh"
        }}>
          <Grid item xs={1} md={2} lg={2}/>
          <Grid item xs={10} md={8} lg={8}>
            <Typography sx={{
              paddingTop:"2vh",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
             variant='h3' color={"rgba(41,72,178)"} fontFamily={"serif"}
            >To add your company to the listings, Hire Us</Typography>
            <Button
              style={{
              // color:"blue",
              borderColor:"blue",
              width: "65vw",
              height: "8vh",
              marginTop:"5%",
              marginBottom:"5%"
              }}
              variant="outlined"
              sx={{
              ":hover":{
                  bgcolor:"#00008b !important",
                  color:"#FFF"
              }
              }}
              onClick={handleClick}
            >
              CONTACT : HIRE HELP
            </Button>
          </Grid>
          <Grid item xs={1} md={2} lg={2}/>
        </Grid>
    </div>
  )
}
