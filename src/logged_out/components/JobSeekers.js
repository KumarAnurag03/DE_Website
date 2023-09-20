import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Reg, { Register } from "./register_login/Register";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
// import WaveBorder from "../../../shared/components/WaveBorder";
// import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import Truck from '../../images/Job_Seeker.jpg'
// import './HeadSection.css'
import WaveBorder from "../../shared/components/WaveBorder";
import './JobSeekers.css'
import { useStateValue } from "../../MyContexts/StateProvider";
import { useHistory } from 'react-router-dom'

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
    backgroundImage:"url('https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_1280.jpg')",
    // backgroundColor: theme.pal ette.secondary.main,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    backgroundColor:"rgba(0,0,0,0.5)",
    height:"80%",
    width:"80%",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(25),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(50),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(50),
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

  const history=useHistory();

  const { classes, theme, openRegisterDialog, openLoginDialog } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [{user},dispatch]=useStateValue();

  const handleClick=()=>{
    history.push('/joblistings')
  }
  const handleClickcon=()=>{
    history.push('/contact')
  }

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container,"picture")}>
          <Typography
            variant="h4"
            color="white"
          >
            Our goal is to find a job that best suits you and your 
            capabilities so we can get you in a role that you can not only
             do well in but excel at! We want work to be a place you feel like you are hitting
              your highest potential and continuing to grow at. Our job is to find that for you. 
              Not every person is good for every job, so we work to find one that suits you and your needs.
              Our goal is to find a job that best suits you and your 
             capabilities so we can get you in a role that you can not only
             do well in but excel at! We want work to be a place you feel like you are hitting
              your highest potential and continuing to grow at. Our job is to find that for you. 
              Not every person is good for every job, so we work to find one that suits you and your needs.
              Our goal is to find a job that best suits you and your 
            capabilities so we can get you in a role that you can not only
             do well in but excel at! We want work to be a place you feel like you are hitting
              your highest potential and continuing to grow at. Our job is to find that for you. 
              Not every person is good for every job, so we work to find one that suits you and your needs.
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
      
      <Box
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
      </Box>
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

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
