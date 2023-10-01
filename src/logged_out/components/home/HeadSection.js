import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import Truck from '../../../images/Truck.jpg'
import './HeadSection.css'

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
    position: "relative",
    backgroundImage:"url('https://www.jobsintrucks.com/img/rwd-jit/hero1.jpg')",
    // backgroundColor: theme.pal ette.secondary.main,
    // backgroundColor:"rgba(0,255,0,0.5)",
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
    backgroundColor:"rgba(0,0,0,0.7)",
    paddingLeft:"7vw",
    paddingRight:"7vw",
    borderRadius:"20px",
    paddingBottom:"2vh",
    // opacity:"1",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20),
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
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Typography variant="h4" fontFamily={"serif"} display={"inline"} color={"rgba(255,255,255)"}>At </Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={theme.palette.secondary.main}>D</Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={"rgba(72, 41, 178,0.8)"}>ream </Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={theme.palette.secondary.main}>E</Typography>
          <Typography variant="h3" fontFamily={"serif"} display={"inline"} color={"rgba(72, 41, 178,0.8)"}>mployment,</Typography>
          <Typography variant="h4" color={"rgba(255,255,255)"} fontFamily={"serif"}
          sx={{
            paddingBottom:"8px"
          }}
          >Our mission is clear : "Navigating Dreams to Real Opportunities"</Typography>
          <Typography variant="h4" fontFamily={"serif"} display={"inline"} color={"rgba(255,255,255)"}> We specialize in connecting businesses with skilled professionals</Typography>
          <Typography variant="h4" fontFamily={"serif"} display={"inline"} color={"rgba(255,255,255)"}> who can drive success on the road and within the warehouse.Our staffing solutions are adaptable to your business needs, offering temporary, temp-to-
perm, and permanent options.</Typography>
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
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
