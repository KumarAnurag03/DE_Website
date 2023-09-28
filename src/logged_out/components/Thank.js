import { Button, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";

export const Thank = () => {

    useEffect(()=>{
        document.title="Thanks"
        window.scrollTo(0,0);
    },[])

    const history=useHistory();

    const handleClick=()=>{
      history.push('/joblistings')
    }

  return (
    <div
    style={{
      marginTop:"15vh"
    }}>
      <Typography sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"5vh"
      }} color={"rgba(41,72,178)"} variant='h2' fontFamily={"serif"}>
        Thank you for applying.
      </Typography> 
    <Button variant='outlined' sx={{
      width:"15vw",
      borderColor:"rgba(41,72,178)",
      marginLeft:"43%",
      ":hover":{
        bgcolor:"#00008b !important",
        color:"#FFF"
      }
    }} onClick={handleClick}>View more jobs</Button>
    </div>
  )
}
