import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Reg, { Register } from "./register_login/Register";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
// import WaveBorder from "../../../shared/components/WaveBorder";
// import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drive from '../../images/drive.jpg'
import Stair from "../../images/job-seek.jpg";
// import './HeadSection.css'
import WaveBorder from "../../shared/components/WaveBorder";
import './JobSeekers.css'
import { useStateValue } from "../../MyContexts/StateProvider";
import { useHistory } from 'react-router-dom';

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    backgroundPosition: "relative",
    // backgroundImage:"url('https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_1280.jpg')",
    backgroundImage:`url(${Stair})`,
    backgroundSize:"cover",
    // backgroundColor: theme.palette.secondary.main,
    backgroundRepeat: "no-repeat",
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    backgroundColor:"rgba(255,255,255,0.4)",
    borderRadius:"20px",
    paddingTop:"5vh",
    paddingBottom:"5vh",
    paddingLeft:"6vw",
    paddingRight:"4vw",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(30),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(30),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(30),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(5),
  },
});

function HeadSection(props) {

  useEffect(()=>{
    document.title="Job-Seekers"
  },[])

  const history=useHistory();

  const { classes, theme, openRegisterDialog, openLoginDialog } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [{user},dispatch]=useStateValue();

  const handleClick=()=>{
    history.push('/joblistings')
  }
  const handleClickcon=()=>{
    history.push('/register/01')
  }

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container,"picture")}>
          {/* <Typography variant="h4" fontFamily={"serif"} display={"inline"} color={"rgba(0,0,0)"}>At </Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={theme.palette.secondary.main}>D</Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={"rgba(72, 41, 178,0.8)"}>ream </Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={theme.palette.secondary.main}>E</Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={"rgba(72, 41, 178,0.8)"}>mployment,</Typography> */}
          <Typography variant="h4" color={"rgba(0,0,0)"} fontFamily={"serif"}
          >
            We understand that the journey to finding your ideal job can be both exciting and challenging. That's
why Dream Employment is here to support you every step of the way. Whether you're a seasoned
professional looking for your next career move or a recent graduate eager to kick-start your journey,
Explore <b>Available Opportunities</b> to discover a wide range of job openings from leading companies in
various industries, or <b>Apply with Us</b> to benefit from our team's expertise. Your dream job is within
reach, and we're here to help you seize it. Join us on this path to success!
          </Typography>
          {/* <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  {/* <Grid item xs={12} md={5}> */}
                    {/* <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      {/* <Box mb={4}>
                        <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                          Free Template for building a SaaS app using
                          Material-UI
                        </Typography>
                      </Box> */}
                      {/* <div> */}
                        {/* <Box mb={2}>
                          <Typography
                            variant={isWidthUpLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt
                          </Typography>
                        </Box> */}
                        {/* <Button
                          variant="contained"
                          color="secondary"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="https://github.com/dunky11/react-saas-template"
                        >
                          Download from GitHub
                        </Button> */}
                      {/* </div> */}
                    {/* </Box> */} 
                  {/* </Grid> */}
                  {/* <Hidden mdDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box> */} 
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
      
      {/* <Box
      sx={{
        backgroundColor:"white",
        width:"100%",
        height:"60vh"
      }}
      >
        <Box
        sx={{
          backgroundRepeat:"no-repeat",
          backgroundImage:'url("https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-company-profile-powerpoint-background_7190a86fdb__960_540.jpg")',
          backgroundSize:"cover",
          width:"100%",
          height:"100%",
          display:"flex",
          flexDirection:"row-reverse"
        }}
        >
          <div
          style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginRight:"5%"
            // alignItems:"center"
          }}
          >
            <Typography variant="h4">In need of skilled professionals?</Typography>
            <Typography variant="h5"
            sx={{
              marginTop:8
            }}
            >Learn what more we can do to help you</Typography>
            <Typography variant="h5"
            sx={{
              marginTop:1
            }}
            >Contact Dream Employment team and get started</Typography>
            <Button style={{
              borderColor:"blue",
              width:"75%",
              height:"6vh",
              marginTop:"15%",
              marginLeft:"10%"
              
            }}
            variant="outlined"
            sx={{
              ":hover":{
                bgcolor:"#00008b !important",
                color:"#FFF"
              }
            }}
            onClick={handleClickcon}
            >Hire Help</Button>
          </div>
        </Box>
      </Box> */}
        <Button
          style={{
          // color:"blue",
          borderColor:"blue",
          width: "90vw",
          height: "10vh",
          marginTop:"5%",
          marginLeft:"5%"
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
          AVAILABLE OPPORTUNITIES
        </Button>

        <Button
          style={{
          // color:"blue",
          borderColor:"blue",
          width: "90vw",
          height: "10vh",
          marginTop:"5%",
          marginLeft:"5%"
          }}
          variant="outlined"
          sx={{
          ":hover":{
              bgcolor:"#00008b !important",
              color:"#FFF"
          }
          }}
          onClick={handleClickcon}
        >
          APPLY NOW
        </Button>

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
